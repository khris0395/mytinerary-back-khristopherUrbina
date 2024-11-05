import City from "../../models/City.js"

const updateDescription =  async (req,res, next) =>{

    try {

        let city = req.body
        let upd = await City.updateOne(

            {_id: city._id},
            {description: city.description}

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


export {updateDescription}