import { Router } from "express";
import { postNote } from "../controllers/postNoteControllers.js"


const router = Router();

router.post('/notes', postNote)


export default router
