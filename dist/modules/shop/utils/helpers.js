"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const crypto_1 = __importDefault(require("crypto"));
class OtpService {
    // Generate a 6-digit OTP
    static generateOtp(length = 6) {
        const max = Math.pow(10, length);
        const otp = crypto_1.default.randomInt(0, max);
        return otp.toString().padStart(length, "0"); // keep leading zeros
    }
    // Save OTP with expiration (default: 5 minutes)
    static saveOtp(key, otp, expiresInMinutes = 5) {
        const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;
        this.otpStore.set(key, { otp, expiresAt });
    }
    // Verify OTP and remove it after use
    static verifyOtp(key, otpAttempt) {
        const entry = this.otpStore.get(key);
        if (!entry)
            return false;
        if (Date.now() > entry.expiresAt) {
            this.otpStore.delete(key); // expired
            return false;
        }
        if (entry.otp !== otpAttempt)
            return false;
        this.otpStore.delete(key); // one-time use
        return true;
    }
    // (Optional) Auto-clean expired OTPs periodically
    static cleanupExpired() {
        const now = Date.now();
        for (const [key, entry] of this.otpStore.entries()) {
            if (entry.expiresAt < now)
                this.otpStore.delete(key);
        }
    }
}
exports.OtpService = OtpService;
// Store OTPs temporarily in memory
OtpService.otpStore = new Map();
// Optionally, auto-run cleanup every 5 minutes
setInterval(() => OtpService.cleanupExpired(), 5 * 60 * 1000);
