import Itinerary from "../../models/Itinerary.js"

const updateLikes =  async (req,res, next) =>{

    try {

        let itinerary = req.body
        let upd = await Itinerary.updateOne(

            {_id: itinerary._id},
            {likes: itinerary.likes}

        )

        if (upd) {

            return res.status(200).json({

                response: upd

            })
            
        }
        
    } catch (error) {

        next(error)
        
    }

}

export {updateLikes}