import User from "../../models/User.js"

let deleteById = async (req,res, next) =>{
    try {

        let deleteUser = await User.findByIdAndDelete({

            _id: req.body._id

        })
        return res.status(201).json({
            response: deleteUser
        })
    } catch (error) {
        
        next(error)

    }
}

export {deleteById}