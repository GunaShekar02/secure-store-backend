import l from "../../common/logger";
import { adminEmail, adminPassword, adminApiKey } from "../../common/config";

class AdminService {
  /**
   * Login for admin
   * @param {string} email - Email of the admin
   * @param {string} password - Password of the admin
   */
  async login(email, password) {
    try {
      if (email !== adminEmail || password !== adminPassword)
        throw { status: 401, message: "Invalid credentials!" };
      return adminApiKey;
    } catch (err) {
      l.error("[ADMIN LOGIN]", err);
      throw err;
    }
  }
}

export default new AdminService();
