import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

/**
 * Upload file to Cloudinary
 * @param file - The file stream from GraphQL Upload
 * @param folder - Optional folder path in Cloudinary
 * @returns Promise with Cloudinary upload result
 */
export async function uploadToCloudinary(
  file: any,
  folder: string = "message-attachments"
): Promise<{
  url: string;
  public_id: string;
  format: string;
  bytes: number;
  resource_type: string;
}> {
  try {
    const { createReadStream, filename, mimetype } = await file;

    // Determine resource type based on mimetype
    let resourceType: "image" | "video" | "raw" | "auto" = "auto";
    if (mimetype.startsWith("image/")) {
      resourceType = "image";
    } else if (mimetype.startsWith("video/")) {
      resourceType = "video";
    } else {
      resourceType = "raw"; // For documents, PDFs, etc.
    }

    // Upload to Cloudinary using stream
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: resourceType,
          // Optional: Add transformations for images
          ...(resourceType === "image" && {
            transformation: [
              { quality: "auto" },
              { fetch_format: "auto" },
            ],
          }),
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else if (result) {
            resolve({
              url: result.secure_url,
              public_id: result.public_id,
              format: result.format,
              bytes: result.bytes,
              resource_type: result.resource_type,
            });
          } else {
            reject(new Error("Upload failed: No result returned"));
          }
        }
      );

      createReadStream().pipe(uploadStream);
    });
  } catch (error) {
    console.error("Error in uploadToCloudinary:", error);
    throw error;
  }
}

/**
 * Delete file from Cloudinary
 * @param publicId - The public ID of the file in Cloudinary
 * @param resourceType - Type of resource (image, video, raw)
 * @returns Promise with deletion result
 */
export async function deleteFromCloudinary(
  publicId: string,
  resourceType: "image" | "video" | "raw" = "image"
): Promise<any> {
  try {
    return await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw error;
  }
}

/**
 * Upload file from URL to Cloudinary (useful for scraping)
 * @param imageUrl - The URL of the image to upload
 * @param folder - Optional folder path in Cloudinary
 * @returns Promise with Cloudinary URL
 */
export async function uploadFromUrl(
  imageUrl: string,
  folder: string = "message-attachments"
): Promise<string> {
  const cloudinaryKeys = [
    {
      url: "https://api.cloudinary.com/v1_1/dvzvw2ztg/image/upload",
      preset: "tiktokshop",
    },
    {
      url: "https://api.cloudinary.com/v1_1/dvh8zf1nm/image/upload",
      preset: "tiktokshop",
    },
    {
      url: "https://api.cloudinary.com/v1_1/djcsccoap/image/upload",
      preset: "tiktokshop",
    },
  ];

  for (const cloudinaryKey of cloudinaryKeys) {
    try {
      const formData = new FormData();
      formData.append("file", imageUrl);
      formData.append("upload_preset", cloudinaryKey.preset);

      const response = await fetch(cloudinaryKey.url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(
        `Failed to upload with ${cloudinaryKey.url}, trying next...`,
        error
      );
      continue;
    }
  }

  throw new Error("All Cloudinary upload attempts failed");
}
