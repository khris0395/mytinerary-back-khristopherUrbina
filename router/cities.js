import {Router} from "express";
import { allCities, citiesByName, citiesById} from "../controllers/cities/read.js";
import { createCity, createCities } from "../controllers/cities/create.js"; 
import { updateDescription } from "../controllers/cities/update.js";
import { deleteById } from "../controllers/cities/delete.js";
import { schemaCreateCity, schemaCreateCities } from "../schemas/cities/create.js";
import schemaDeleteById from "../schemas/cities/delete.js";
import schemaUpdateDescription from "../schemas/cities/update.js";
import passport from "../middlewares/passport.js";
import { validator } from "../middlewares/validator.js";

const routerCities = Router()

routerCities.get("/allCities", allCities)
routerCities.get("/name/:x", passport.authenticate('jwt',{session:false}), citiesByName)
routerCities.get("/id/:id", passport.authenticate('jwt',{session:false}), citiesById)
routerCities.post("/createCity",validator(schemaCreateCity), createCity)
routerCities.post("/creatreCities", validator(schemaCreateCities), createCities)
routerCities.put("/updateDescription", validator(schemaUpdateDescription), passport.authenticate('jwt',{session:false}), updateDescription)
routerCities.delete("/deleteById", validator(schemaDeleteById), passport.authenticate('jwt',{session:false}), deleteById)

export default routerCities