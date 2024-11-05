import City from "../../models/City.js"

let deleteById = async (req,res, next) =>{
    try {

        let deleteCity = await City.findByIdAndDelete({

            _id: req.body._id

        })
        return res.status(201).json({
            response: deleteCity
        })
    } catch (error) {
        
        next(error)

    }
}

export {deleteById}