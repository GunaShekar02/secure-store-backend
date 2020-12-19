import AdminService from "../../services/admin.service";

export class Controller {
  async login(req, res, next) {
    try {
      const apiKey = await AdminService.login(
        req.body.email,
        req.body.password
      );
      res.status(200).json({ apiKey, message: "Successfully logged in!" });
    } catch (err) {
      next(err);
    }
  }
}

export default new Controller();
