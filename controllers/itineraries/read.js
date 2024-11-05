import Itinerary from "../../models/Itinerary.js"

let allItineraries= async (req,res, next)=>{

    try {
        let {nameCity} = req.query
        let query= {}

        if (nameCity) {

            query.nameCity= {$regex : "^"+nameCity, $options : "i"}
            
        }

        let all= await Itinerary.find(query)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let allByCity= async (req,res, next)=>{

    try {

        let cityQuery = req.params.x
        let all= await Itinerary.find({city : cityQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}


let itinerariesById = async (req,res, next)=>{

    try {
        console.log(req.params);
        
        let idQuery = req.params.id
        let all = await  User.findById(idQuery)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}


export {allItineraries, allByCity, itinerariesById}