import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chalk from "chalk"

import routerNote from "./routes/postNoteRoute.js"

const PORT = process.env.PORT


dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());


app.use(routerNote)



app.listen(PORT, ()=>console.log(chalk.yellow(`Run in ${PORT}`)))

