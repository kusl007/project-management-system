import { Router } from "express";
import {

  registerUser
 
} from "../controllers/auth.controllers.js";


const router = Router();

// unsecured route
router.route("/register").post(registerUser);

export default router;