import { Router } from "express"
import { getNote } from "../controllers/getNoteControllers.js"

const router = Router()

router.get('/notes', getNote)

export default router