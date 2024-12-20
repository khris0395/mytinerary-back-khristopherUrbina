import Itinerary from "../../models/Itinerary.js"

let createItinerary = async (req,res, next) =>{
    try {
        let itinerary = req.body
        let all = await Itinerary.create(itinerary)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        
        next(error)

    }
}

let createItineraries = async (req,res, next) =>{
    try {
        let itineraries = req.body
        let all = await Itinerary.insertMany(itineraries)
        return res.status(201).json({
            response: all
        })
    } catch (error) {

        next(error)
    }
}

export {createItinerary, createItineraries}