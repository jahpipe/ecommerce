import dbConfig from "./db/db";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import AccountRoutes from "../src/PublicRoutes/AccountRoutes/AccountRoutes"

//db connection//
dbConfig()

dotenv.config()

const app = express()

//middle ware///
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(cookieParser())

//ROUTES//

app.use("/api", AccountRoutes)

//PORT//
const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log("connected to port :", port)
})
