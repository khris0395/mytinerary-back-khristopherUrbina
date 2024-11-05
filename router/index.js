import { Router } from "express";
import routerCities from "./cities.js";
import routerItineraries from "./itineraries.js";

const indexRouter = Router()

indexRouter.use("/cities",routerCities)
indexRouter.use("/itineraries", routerItineraries)

export default indexRouter