import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"
import not_found_error_handler from './middlewares/not_found_error_handler.js';
import bad_request_error_handler from './middlewares/bad_request_error_handler.js';
import internal_server_error_handler from './middlewares/internal_server_error_handler.js';

const server = express()
const PORT = process.env.PORT || 8080

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan("dev"))

server.use("/api", indexRouter)

server.use(not_found_error_handler)
server.use(bad_request_error_handler)
server.use(internal_server_error_handler)

const ready = ()=> console.log("The online server is: " +PORT);

server.listen(PORT, ready)