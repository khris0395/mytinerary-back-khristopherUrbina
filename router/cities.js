import {Router} from "express";
import { allCities, citiesByName, citiesById} from "../controllers/cities/read.js";
import { createCity, createCities } from "../controllers/cities/create.js"; 
import { updateDescription } from "../controllers/cities/update.js";
import { deleteById } from "../controllers/cities/delete.js";

const routerCities = Router()

routerCities.get("/allCities", allCities)
routerCities.get("/name/:x", citiesByName)
routerCities.get("/id/:id", citiesById)
routerCities.post("/createCity", createCity)
routerCities.post("/creatreCities", createCities)
routerCities.put("/updateDescription", updateDescription)
routerCities.delete("/deleteById", deleteById)

export default routerCities