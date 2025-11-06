"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
exports.deleteFileFromCloudinary = deleteFileFromCloudinary;
exports.isEmail = isEmail;
const bcrypt = require("bcrypt");
const axios = require("axios");
const crypto = require("crypto");
/**
 * Hashes a password.
 * @param password - The plain text password to hash.
 * @returns A promise that resolves to the hashed password.
 */
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const saltRounds = 10; // Number of hashing rounds
        return yield bcrypt.hash(password, saltRounds);
    });
}
/**
 * Compares a plain text password with a hashed password.
 * @param plainPassword - The plain text password.
 * @param hashedPassword - The hashed password.
 * @returns A promise that resolves to a boolean indicating if the passwords match.
 */
function comparePassword(plainPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.compare(plainPassword, hashedPassword);
    });
}
function deleteFileFromCloudinary(imageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const cloudName = process.env.CLOUD_NAME;
        const apiKey = process.env.API_KEY; // Replace with your Cloudinary API key
        const apiSecret = process.env.API_SECRET; // Replace with your Cloudinary API secret
        const timestamp = Math.floor(Date.now() / 1000);
        const getPublicId = (url) => {
            const lastSegment = url.split("/").pop(); // Get last part of the URL
            return lastSegment ? lastSegment.split(".")[0] : null;
        };
        const publicId = "qobnsctkkcbzgqn9lq9h";
        if (!publicId)
            return console.error("Invalid URL format");
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
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                console.error("Error deleting file:", error);
            }
            else {
                console.log("File deleted successfully:", result);
            }
        });
    });
}
function isEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email)
            return false;
        const cleaned = email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(cleaned);
    });
}
