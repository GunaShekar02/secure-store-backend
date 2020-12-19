import nodemailer from "nodemailer";

import l from "../../common/logger";
import { emailId, emailPassword } from "../../common/config";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailId,
    pass: emailPassword,
  },
});

class MailerService {
  async sendOTP(recipient, otp) {
    try {
      let mailOptions = {
        from: emailId,
        to: recipient,
        subject: `[SECURE STORE] Registration OTP`,
        text: `Hello!\nYour OTP for registering on Secure Store is ${otp}.`,
      };
      this.triggerMail(mailOptions);
    } catch (err) {
      l.error("[SEND OTP]", err, eventName);
      throw err;
    }
  }

  async triggerMail(mailOptions) {
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      throw err;
    }
  }
}

export default new MailerService();
