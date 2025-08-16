import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.js";
import { registerUser,loginUser, logoutUser } from "../controllers/auth.controllers.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// unsecured routes
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);


//secure routes
router.route("/logout").post(verifyJWT, logoutUser);



export default router;
