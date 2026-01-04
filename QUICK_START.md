# Message Center - Quick Start Guide

## ✅ What's Been Created

### Database Entities (Auto-created on server start)
1. **conversations** - Chat threads
2. **conversation_members** - User participation & unread counts
3. **messages** - Message content
4. **message_attachments** - File URLs (Cloudinary)
5. **message_status** - Read/unread tracking

### Backend Files Created
```
src/
├── utils/
│   └── uploadHelper.ts                      ← NEW: Cloudinary upload utilities
├── modules/
│   ├── conversation/
│   │   ├── entity/index.ts                  ← NEW: Conversation entity
│   │   ├── types/index.ts                   ← NEW: TypeScript types
│   │   ├── services/index.ts                ← NEW: Business logic
│   │   ├── schemas/index.ts                 ← NEW: GraphQL schema
│   │   ├── resolvers/index.ts               ← NEW: GraphQL resolvers
│   │   └── index.ts
│   ├── conversationMember/
│   │   ├── entity/index.ts                  ← NEW: Member entity
│   │   └── index.ts
│   ├── message/
│   │   ├── entity/index.ts                  ← NEW: Message entity
│   │   ├── types/index.ts                   ← NEW: TypeScript types
│   │   ├── services/index.ts                ← NEW: Business logic
│   │   ├── schemas/index.ts                 ← NEW: GraphQL schema
│   │   ├── resolvers/index.ts               ← NEW: GraphQL resolvers
│   │   └── index.ts
│   ├── messageAttachment/
│   │   ├── entity/index.ts                  ← NEW: Attachment entity
│   │   ├── services/index.ts                ← NEW: Upload service
│   │   ├── schemas/index.ts                 ← NEW: GraphQL schema
│   │   ├── resolvers/index.ts               ← NEW: Upload resolvers
│   │   └── index.ts
│   └── messageStatus/
│       ├── entity/index.ts                  ← NEW: Status entity
│       └── index.ts
└── data-source.ts                           ← UPDATED: Added entities
```

## 🚀 Integration (3 Steps)

### Step 1: Register Schemas
Edit `/src/schema/index.ts`:

```typescript
import { conversationSchema } from "../modules/conversation/schemas";
import { messageSchema } from "../modules/message/schemas";
import { messageAttachmentSchema } from "../modules/messageAttachment/schemas";

export const typeDefs = gql`
  // ... existing code

  ${conversationSchema}
  ${messageSchema}
  ${messageAttachmentSchema}
`;
```

### Step 2: Register Resolvers
Find your resolvers file and add:

```typescript
import { conversationResolvers } from "./modules/conversation/resolvers";
import { messageResolvers } from "./modules/message/resolvers";
import { messageAttachmentResolvers } from "./modules/messageAttachment/resolvers";

const resolvers = {
  Query: {
    ...conversationResolvers.Query,
    ...messageResolvers.Query,
    ...messageAttachmentResolvers.Query,
    // ... existing queries
  },
  Mutation: {
    ...conversationResolvers.Mutation,
    ...messageResolvers.Mutation,
    ...messageAttachmentResolvers.Mutation,
    // ... existing mutations
  },
};
```

### Step 3: Start Server
```bash
npm run dev
```

Tables will auto-create! ✨

## 📝 Quick Test Queries

### 1. Create a Conversation
```graphql
mutation {
  createConversation(data: {
    title: "Support Chat"
    type: SUPPORT
    memberIds: ["customer-id-1", "admin-id-2"]
  }) {
    success
    data {
      id
      title
    }
  }
}
```

### 2. Send a Message
```graphql
mutation {
  sendMessage(data: {
    conversation_id: "your-conversation-id"
    text: "Hello, I need help!"
  }) {
    success
    data {
      id
      text
      created_at
    }
  }
}
```

### 3. Upload File (Frontend)
```typescript
// React example
const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadMessageAttachment(file: $file) {
      success
      data {
        id
        file_url
        file_name
      }
    }
  }
`;

function FileUpload() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    await uploadFile({ variables: { file } });
  };

  return <input type="file" onChange={handleUpload} />;
}
```

### 4. Get Messages
```graphql
query {
  getMessages(
    where: { conversation_id: "your-conversation-id" }
    page: 1
    limit: 50
  ) {
    success
    total
    data {
      id
      text
      sender {
        firstName
        lastName
      }
      attachments {
        file_url
        file_name
      }
      created_at
    }
  }
}
```

## 🎨 Frontend Integration

### Display Messages
```jsx
function MessageList({ conversationId }) {
  const { data } = useQuery(GET_MESSAGES, {
    variables: { where: { conversation_id: conversationId } }
  });

  return (
    <div>
      {data?.getMessages?.data?.map(msg => (
        <div key={msg.id}>
          <strong>{msg.sender.firstName}:</strong>
          <p>{msg.text}</p>
          {msg.attachments?.map(att => (
            <img key={att.id} src={att.file_url} alt={att.file_name} />
          ))}
        </div>
      ))}
    </div>
  );
}
```

### Send Message with File
```jsx
function MessageComposer({ conversationId }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleSend = async () => {
    let attachments = [];

    // Upload file first if exists
    if (file) {
      const { data } = await uploadFile({ variables: { file } });
      attachments = [{
        file_url: data.uploadMessageAttachment.data.file_url,
        file_type: file.type,
        file_name: file.name,
        file_size: file.size
      }];
    }

    // Send message
    await sendMessage({
      variables: {
        data: {
          conversation_id: conversationId,
          text,
          attachments
        }
      }
    });

    setText('');
    setFile(null);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
```

## 🔧 Environment Setup

Ensure these are in `.env`:
```env
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

## 📚 Full Documentation

- [FILE_UPLOAD_GUIDE.md](FILE_UPLOAD_GUIDE.md) - Complete file upload documentation
- Check `/src/modules/message/services/` for all available methods

## 🎯 Key Features

✅ Multi-user conversations (1-on-1, groups, support)
✅ Send text messages
✅ Reply to messages
✅ File attachments (images, videos, docs)
✅ Read/unread tracking
✅ Unread count per user
✅ Message deletion
✅ Cloudinary file storage
✅ Full authentication & authorization
✅ GraphQL API
✅ TypeORM auto-sync

## 🆘 Troubleshooting

**Tables not created?**
- Check `synchronize: true` in [data-source.ts](src/data-source.ts:36)
- Restart server

**Upload not working?**
- Verify Cloudinary credentials in `.env`
- Check `graphql-upload` is configured in server

**GraphQL errors?**
- Make sure schemas are registered in Step 1
- Make sure resolvers are registered in Step 2

## 🎉 You're Ready!

Start your server and test with GraphQL Playground at `http://localhost:4000/graphql`
