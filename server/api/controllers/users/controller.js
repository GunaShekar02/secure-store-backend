import UsersService from "../../services/users.service";

export class Controller {
  async register(req, res, next) {
    try {
      await UsersService.register(req.body.roll);
      res.status(200).json({ message: "OTP has been sent to mail!" });
    } catch (err) {
      next(err);
    }
  }

  async verifyOtp(req, res, next) {
    try {
      const { roll, otp, pubKey } = req.body;
      await UsersService.verifyOtp(roll, otp, pubKey);
      res.status(200).json({ message: "Successfully verified!" });
    } catch (err) {
      next(err);
    }
  }
}

export default new Controller();
