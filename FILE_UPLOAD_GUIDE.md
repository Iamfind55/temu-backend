# Message Center File Upload Guide

## Overview
Complete guide for uploading files (images, videos, documents) to message attachments using Cloudinary storage.

## 🎯 Architecture

```
Frontend Upload → GraphQL API → Cloudinary → Database (URL Storage)
```

### Flow:
1. **Frontend** sends file via GraphQL mutation with `Upload` scalar
2. **Backend** receives file stream
3. **Cloudinary** stores file and returns secure URL
4. **Database** stores file metadata and Cloudinary URL
5. **Frontend** displays file from Cloudinary URL

## 📁 Created Files

### 1. Upload Helper Utility
**Location:** `/src/utils/uploadHelper.ts`

Functions:
- `uploadToCloudinary(file, folder)` - Upload file stream to Cloudinary
- `deleteFromCloudinary(publicId, resourceType)` - Delete file from Cloudinary
- `uploadFromUrl(imageUrl, folder)` - Upload from external URL (for scraping)

### 2. MessageAttachment Service
**Location:** `/src/modules/messageAttachment/services/index.ts`

Methods:
- `uploadAttachment()` - Upload single file
- `uploadMultipleAttachments()` - Upload multiple files
- `deleteAttachment()` - Delete file from Cloudinary and database
- `getMessageAttachments()` - Get all attachments for a message

### 3. GraphQL Schema
**Location:** `/src/modules/messageAttachment/schemas/index.ts`

### 4. GraphQL Resolvers
**Location:** `/src/modules/messageAttachment/resolvers/index.ts`

## 🚀 Integration Steps

### Step 1: Register GraphQL Schema & Resolvers

Update `/src/schema/index.ts`:

```typescript
import { messageAttachmentSchema } from "../modules/messageAttachment/schemas";

export const typeDefs = gql`
  scalar Upload
  // ... your other schemas

  ${messageAttachmentSchema}
  ${conversationSchema}
  ${messageSchema}
  // ... other schemas
`;
```

Update your resolvers file:

```typescript
import { messageAttachmentResolvers } from "../modules/messageAttachment/resolvers";

const resolvers = {
  Query: {
    ...messageAttachmentResolvers.Query,
    // ... other queries
  },
  Mutation: {
    ...messageAttachmentResolvers.Mutation,
    // ... other mutations
  },
};
```

### Step 2: Configure Environment Variables

Ensure these are in your `.env` file:

```env
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### Step 3: Configure GraphQL Upload in Server

Your server should already have `graphql-upload` configured. If not, add to your Apollo Server setup:

```typescript
import { graphqlUploadExpress } from "graphql-upload";

// Before Apollo middleware
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
```

## 📝 Usage Examples

### Frontend - React/Vue/Angular

#### Option 1: Send Message with File Upload (Single File)

```typescript
import { gql, useMutation } from '@apollo/client';

const SEND_MESSAGE_WITH_FILE = gql`
  mutation SendMessageWithFile($data: SendMessageInput!, $file: Upload) {
    sendMessage(data: $data) {
      success
      data {
        id
        text
        attachments {
          id
          file_url
          file_name
          file_type
          file_size
        }
      }
    }
  }
`;

// In your component:
function MessageForm() {
  const [sendMessage] = useMutation(SEND_MESSAGE_WITH_FILE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    await sendMessage({
      variables: {
        data: {
          conversation_id: "conv-id-123",
          text: "Check out this image!"
        }
      },
      context: {
        headers: {
          'Apollo-Require-Preflight': 'true',
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" />
      <button type="submit">Send</button>
    </form>
  );
}
```

#### Option 2: Upload File First, Then Send Message

**Step 1: Upload Attachment**
```graphql
mutation UploadAttachment($file: Upload!) {
  uploadMessageAttachment(file: $file) {
    success
    data {
      id
      file_url
      file_name
      file_type
      file_size
    }
    error {
      message
    }
  }
}
```

**Frontend Code:**
```typescript
const UPLOAD_ATTACHMENT = gql`
  mutation UploadAttachment($file: Upload!) {
    uploadMessageAttachment(file: $file) {
      success
      data {
        id
        file_url
        file_name
        file_type
        file_size
      }
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessage($data: SendMessageInput!) {
    sendMessage(data: $data) {
      success
      data {
        id
        text
        attachments {
          id
          file_url
          file_name
        }
      }
    }
  }
`;

function MessageComposer() {
  const [uploadAttachment] = useMutation(UPLOAD_ATTACHMENT);
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const { data } = await uploadAttachment({
      variables: { file }
    });

    if (data.uploadMessageAttachment.success) {
      setUploadedFiles([...uploadedFiles, data.uploadMessageAttachment.data]);
    }
  };

  const handleSendMessage = async (text) => {
    await sendMessage({
      variables: {
        data: {
          conversation_id: "conv-id-123",
          text: text,
          attachments: uploadedFiles.map(file => ({
            file_url: file.file_url,
            file_type: file.file_type,
            file_name: file.file_name,
            file_size: file.file_size
          }))
        }
      }
    });

    setUploadedFiles([]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <div>
        {uploadedFiles.map(file => (
          <div key={file.id}>
            <img src={file.file_url} alt={file.file_name} width="100" />
            <span>{file.file_name}</span>
          </div>
        ))}
      </div>
      <button onClick={() => handleSendMessage("Message text")}>
        Send Message
      </button>
    </div>
  );
}
```

#### Option 3: Upload Multiple Files

```graphql
mutation UploadMultiple($files: [Upload!]!) {
  uploadMultipleAttachments(files: $files) {
    success
    data {
      id
      file_url
      file_name
      file_type
      file_size
    }
  }
}
```

**Frontend Code:**
```typescript
const UPLOAD_MULTIPLE = gql`
  mutation UploadMultiple($files: [Upload!]!) {
    uploadMultipleAttachments(files: $files) {
      success
      data {
        id
        file_url
        file_name
      }
    }
  }
`;

function MultiFileUpload() {
  const [uploadMultiple] = useMutation(UPLOAD_MULTIPLE);

  const handleMultipleUpload = async (e) => {
    const files = Array.from(e.target.files);

    const { data } = await uploadMultiple({
      variables: { files }
    });

    if (data.uploadMultipleAttachments.success) {
      console.log('Uploaded files:', data.uploadMultipleAttachments.data);
    }
  };

  return (
    <input
      type="file"
      multiple
      onChange={handleMultipleUpload}
      accept="image/*,video/*,.pdf,.doc,.docx"
    />
  );
}
```

### Backend - GraphQL Queries

#### Get Message Attachments
```graphql
query GetAttachments($messageId: ID!) {
  getMessageAttachments(messageId: $messageId) {
    success
    data {
      id
      file_url
      file_name
      file_type
      file_size
      uploaded_at
    }
  }
}
```

#### Delete Attachment
```graphql
mutation DeleteAttachment($attachmentId: ID!) {
  deleteMessageAttachment(attachmentId: $attachmentId) {
    success
    data
  }
}
```

## 🎨 Frontend Display Examples

### Display Image Attachment
```jsx
function ImageAttachment({ attachment }) {
  return (
    <div className="attachment">
      <img
        src={attachment.file_url}
        alt={attachment.file_name}
        loading="lazy"
        style={{ maxWidth: '300px' }}
      />
      <div className="attachment-info">
        <span>{attachment.file_name}</span>
        <span>{(attachment.file_size / 1024).toFixed(2)} KB</span>
      </div>
    </div>
  );
}
```

### Display Video Attachment
```jsx
function VideoAttachment({ attachment }) {
  return (
    <video
      src={attachment.file_url}
      controls
      style={{ maxWidth: '400px' }}
    >
      Your browser doesn't support video
    </video>
  );
}
```

### Display Document Attachment
```jsx
function DocumentAttachment({ attachment }) {
  return (
    <a
      href={attachment.file_url}
      download={attachment.file_name}
      className="document-link"
    >
      <DocumentIcon />
      <span>{attachment.file_name}</span>
      <span>{(attachment.file_size / 1024).toFixed(2)} KB</span>
    </a>
  );
}
```

### Generic Attachment Component
```jsx
function MessageAttachment({ attachment }) {
  const isImage = attachment.file_type.startsWith('image/');
  const isVideo = attachment.file_type.startsWith('video/');
  const isDocument = !isImage && !isVideo;

  if (isImage) return <ImageAttachment attachment={attachment} />;
  if (isVideo) return <VideoAttachment attachment={attachment} />;
  if (isDocument) return <DocumentAttachment attachment={attachment} />;

  return null;
}
```

## 🔒 Security & Validation

### File Type Restrictions

Backend automatically handles:
- Image files (JPEG, PNG, GIF, WebP)
- Video files (MP4, WebM, MOV)
- Documents (PDF, DOC, DOCX)

### File Size Limits

Configure in your GraphQL upload middleware:
```typescript
graphqlUploadExpress({
  maxFileSize: 10000000, // 10MB
  maxFiles: 10
})
```

### Frontend Validation
```typescript
function validateFile(file: File): boolean {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'video/mp4',
    'video/webm',
    'application/pdf',
  ];

  if (file.size > maxSize) {
    alert('File too large. Max size is 10MB');
    return false;
  }

  if (!allowedTypes.includes(file.type)) {
    alert('File type not allowed');
    return false;
  }

  return true;
}
```

## 📊 Database Storage

Files are NOT stored in the database. Only metadata is stored:

```sql
message_attachments table:
├── id (UUID)
├── message_id (FK)
├── file_url (Cloudinary URL) ← Actual file location
├── file_type (MIME type)
├── file_name (Original filename)
├── file_size (Bytes)
├── uploaded_at (Timestamp)
└── is_active (Boolean)
```

## 🎯 Supported File Types

### Images
- JPEG/JPG
- PNG
- GIF
- WebP
- SVG

### Videos
- MP4
- WebM
- MOV
- AVI

### Documents
- PDF
- DOC/DOCX
- XLS/XLSX
- TXT
- ZIP

## 💡 Best Practices

### 1. Progressive Upload
Show upload progress to users:
```typescript
const handleUpload = async (file) => {
  setUploading(true);
  setProgress(0);

  try {
    const { data } = await uploadAttachment({
      variables: { file },
      context: {
        fetchOptions: {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          }
        }
      }
    });

    setUploading(false);
  } catch (error) {
    setUploading(false);
    console.error('Upload failed:', error);
  }
};
```

### 2. Image Optimization
Cloudinary automatically optimizes images. Use URL transformations:

```typescript
// Original
const url = attachment.file_url;

// Thumbnail (200x200)
const thumb = url.replace('/upload/', '/upload/w_200,h_200,c_fill/');

// Compressed
const compressed = url.replace('/upload/', '/upload/q_auto,f_auto/');

// Responsive
const responsive = url.replace('/upload/', '/upload/w_auto,dpr_auto/');
```

### 3. Lazy Loading
```jsx
<img
  src={attachment.file_url}
  loading="lazy"
  alt={attachment.file_name}
/>
```

### 4. Error Handling
```typescript
try {
  const result = await uploadAttachment({ variables: { file } });

  if (!result.data.uploadMessageAttachment.success) {
    const error = result.data.uploadMessageAttachment.error;
    toast.error(error.message);
  }
} catch (error) {
  toast.error('Upload failed. Please try again.');
  console.error(error);
}
```

## 🧪 Testing

### Test Upload
```bash
curl -X POST http://localhost:4000/graphql \
  -F operations='{"query":"mutation($file: Upload!) { uploadMessageAttachment(file: $file) { success data { file_url } } }","variables":{"file":null}}' \
  -F map='{"0":["variables.file"]}' \
  -F 0=@./test-image.jpg
```

## 🐛 Troubleshooting

### "Upload scalar not defined"
- Ensure `scalar Upload` is in your schema
- Check `graphql-upload` is installed and configured

### "File upload failed"
- Verify Cloudinary credentials in `.env`
- Check file size limits
- Ensure CORS is configured

### "Invalid file type"
- Check MIME type validation
- Verify file extension matches content

## 📚 Additional Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [GraphQL Upload Specification](https://github.com/jaydenseric/graphql-upload)
- [Apollo Upload Client](https://github.com/jaydenseric/apollo-upload-client)

## 🎉 Complete Example

Check the comprehensive example in:
- Backend: `/src/modules/messageAttachment/`
- Schemas: `/src/modules/messageAttachment/schemas/`
- Service: `/src/modules/messageAttachment/services/`
- Resolvers: `/src/modules/messageAttachment/resolvers/`
