import { Router } from "express";
import routerCities from "./cities.js";
import routerItineraries from "./itineraries.js";
import routerUsers from "./users.js";
import routerAuth from "./auth.js";

const indexRouter = Router()

indexRouter.use("/cities",routerCities)
indexRouter.use("/itineraries", routerItineraries)
indexRouter.use("/users", routerUsers)
indexRouter.use('/auth', routerAuth)

export default indexRouter