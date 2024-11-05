import {Router} from "express";
import { allItineraries, allByCity, itinerariesById } from "../controllers/itineraries/read.js"; 
import { createItinerary, createItineraries } from "../controllers/itineraries/create.js"; 
import { updateLikes } from "../controllers/itineraries/update.js";
import { deleteById, deleteByNameCity } from "../controllers/itineraries/delete.js";

const routerItineraries = Router()

routerItineraries.get("/allItineraries", allItineraries)
routerItineraries.get("/allByCity/:x", allByCity)
routerItineraries.get("/id/:id", itinerariesById)
routerItineraries.post("/createItinerary", createItinerary)
routerItineraries.post("/createItineraries", createItineraries)
routerItineraries.put("/updateLikes", updateLikes)
routerItineraries.delete("/deleteById", deleteById)
routerItineraries.delete("/deleteByNameCity", deleteByNameCity)

export default routerItineraries