import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"

import routerPostNote from "./routes/postNoteRoute.js"
import routerGetNote from "./routes/getNoteRoute.js"

const PORT = process.env.PORT


dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


app.use(routerPostNote)
app.use(routerGetNote)



app.listen(PORT, ()=>console.log(chalk.yellow(`Run in ${PORT}`)))

