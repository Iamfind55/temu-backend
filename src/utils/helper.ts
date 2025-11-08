const bcrypt = require("bcrypt");
const axios = require("axios");
const crypto = require("crypto");

/**
 * Hashes a password.
 * @param password - The plain text password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of hashing rounds
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Compares a plain text password with a hashed password.
 * @param plainPassword - The plain text password.
 * @param hashedPassword - The hashed password.
 * @returns A promise that resolves to a boolean indicating if the passwords match.
 */
export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function deleteFileFromCloudinary(imageUrl: string) {
  const cloudName = process.env.CLOUD_NAME;
  const apiKey = process.env.API_KEY; // Replace with your Cloudinary API key
  const apiSecret = process.env.API_SECRET; // Replace with your Cloudinary API secret
  const timestamp = Math.floor(Date.now() / 1000);

  const getPublicId = (url: string): string | null => {
    const lastSegment = url.split("/").pop(); // Get last part of the URL
    return lastSegment ? lastSegment.split(".")[0] : null;
  };

  const publicId = "qobnsctkkcbzgqn9lq9h";

  if (!publicId) return console.error("Invalid URL format");
  console.log({ publicId });
  // Create the signature. The string to sign should be the parameters sorted in alphabetical order (without any URL encoding) concatenated with your API secret.
  const cloudinary = require("cloudinary").v2;

  // Configure Cloudinary with your credentials
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  // Public ID of the file (extract it from the URL)

  // Delete the file
  cloudinary.uploader.destroy(publicId, (error: any, result: any) => {
    if (error) {
      console.error("Error deleting file:", error);
    } else {
      console.log("File deleted successfully:", result);
    }
  });
}

export async function validateStrongPassword(
  password: string
): Promise<boolean> {
  if (!password) return false;

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return strongPasswordRegex.test(password);
}
export async function isEmail(email: string): Promise<boolean> {
  if (!email) return false;

  const cleaned = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(cleaned);
}
