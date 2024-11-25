import {Router} from "express";
import { allItineraries, allByCity, itinerariesById } from "../controllers/itineraries/read.js"; 
import { createItinerary, createItineraries } from "../controllers/itineraries/create.js"; 
import { updateLikes } from "../controllers/itineraries/update.js";
import { deleteById, deleteByNameCity } from "../controllers/itineraries/delete.js";
import { schemaCreateItinerary, schemaCreateItineraries } from "../schemas/itineraries/create.js";
import schemaUpdateLikes from "../schemas/itineraries/update.js";
import { schemaDeleteById, schemaDeleteByNameCity } from "../schemas/itineraries/delete.js";
import passport from "../middlewares/passport.js";
import { validator } from "../middlewares/validator.js";

const routerItineraries = Router()

routerItineraries.get("/allItineraries", allItineraries)
routerItineraries.get("/allByCity/:x", allByCity)
routerItineraries.get("/id/:id", passport.authenticate('jwt',{session:false}), itinerariesById)
routerItineraries.post("/createItinerary", validator(schemaCreateItinerary), createItinerary)
routerItineraries.post("/createItineraries", validator(schemaCreateItineraries), createItineraries)
routerItineraries.put("/updateLikes", passport.authenticate('jwt',{session:false}), validator(schemaUpdateLikes), updateLikes)
routerItineraries.delete("/deleteById", passport.authenticate('jwt',{session:false}), validator(schemaDeleteById), deleteById)
routerItineraries.delete("/deleteByNameCity", passport.authenticate('jwt',{session:false}), validator(schemaDeleteByNameCity), deleteByNameCity)

export default routerItineraries