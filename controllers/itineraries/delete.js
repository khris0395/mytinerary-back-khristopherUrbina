import Itinerary from "../../models/Itinerary.js"

let deleteById = async (req,res, next) =>{
    try {
        
        let deleteItinerary = await Itinerary.deleteOne({

            _id: req.body._id

        })
        return res.status(201).json({
            response: deleteItinerary
        })
    } catch (error) {
        
        next(error)

    }
}



let deleteByNameCity = async (req,res, next) =>{
    try {
        
        let deleteItinerary = await Itinerary.deleteMany({

            nameCity : req.body.nameCity

        })
        return res.status(201).json({
            response: deleteItinerary
        })
    } catch (error) {
        
        next(error)

    }
}

export {deleteById, deleteByNameCity}