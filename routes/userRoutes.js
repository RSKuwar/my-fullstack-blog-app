import  express  from 'express';
import { getAllUsers, registerController, loginController } from '../controllers/userControllers.js';

//router object
const router = express.Router();

//get all user GET
router.get("/all-users", getAllUsers)

//create user POST
router.post("/register", registerController)

//login POST
router.post("/login",loginController)

export default router;