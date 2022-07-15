import Router from "express";
import { singUpControllers } from "../controllers/singUpControllers.js";

const router = Router()

router.post('/singup', singUpControllers)


export default router