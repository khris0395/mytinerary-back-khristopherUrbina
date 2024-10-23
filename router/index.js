import { Router } from "express";
import routerCities from "./cities.js";

const indexRouter = Router()

indexRouter.use("/cities",routerCities)

export default indexRouter