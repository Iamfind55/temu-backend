import crypto from "crypto";

interface OtpEntry {
  otp: string;
  expiresAt: number;
}

export class OtpService {
  // Store OTPs temporarily in memory
  private static otpStore: Map<string, OtpEntry> = new Map();

  // Generate a 6-digit OTP
  static generateOtp(length: number = 6): string {
    const max = 10 ** length;
    const otp = crypto.randomInt(0, max);
    return otp.toString().padStart(length, "0"); // keep leading zeros
  }

  // Save OTP with expiration (default: 5 minutes)
  static saveOtp(key: string, otp: string, expiresInMinutes = 5): void {
    const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;
    this.otpStore.set(key, { otp, expiresAt });
  }

  // Verify OTP and remove it after use
  static verifyOtp(key: string, otpAttempt: string): boolean {
    const entry = this.otpStore.get(key);
    if (!entry) return false;
    if (Date.now() > entry.expiresAt) {
      this.otpStore.delete(key); // expired
      return false;
    }
    if (entry.otp !== otpAttempt) return false;
    this.otpStore.delete(key); // one-time use
    return true;
  }

  // (Optional) Auto-clean expired OTPs periodically
  static cleanupExpired(): void {
    const now = Date.now();
    for (const [key, entry] of this.otpStore.entries()) {
      if (entry.expiresAt < now) this.otpStore.delete(key);
    }
  }
}

// Optionally, auto-run cleanup every 5 minutes
setInterval(() => OtpService.cleanupExpired(), 5 * 60 * 1000);


