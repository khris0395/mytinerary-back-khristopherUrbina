import {Router} from "express";
import { allCities, citiesByName, citiesById} from "../controllers/cities/read.js";
import { createCity, createManyCities } from "../controllers/cities/create.js"; 

const routerCities = Router()

routerCities.get("/allCities", allCities)
routerCities.get("/name/:x", citiesByName)
routerCities.get("/id/:id", citiesById)
routerCities.post("/createCity", createCity)
routerCities.post("/creatreCities", createManyCities)

export default routerCities