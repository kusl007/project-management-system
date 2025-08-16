import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.js";
import { registerUser } from "../controllers/auth.controllers.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";

const router = Router();

// unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);


export default router;
