import User from "../../models/User.js"

let allUsers= async (req,res, next)=>{

    try {
        let {name} = req.query
        let query= {}

        if (name) {

            query.name= {$regex : "^"+name, $options : "i"}
            
        }

        let all= await User.find(query)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let usersByName = async (req,res, next)=>{

    try {

        let nameQuery = req.params.x
        let all= await User.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let userById = async (req,res, next)=>{

    try {
        
        let idQuery = req.params.id
        let all = await  User.findById(idQuery)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let validUser = async (req, res, next)=>{

    try {
        return res.status(200).json({
            success: true,
            response: req.user
        })
    } catch (error) {
        next(error)
    }
}


export {allUsers, usersByName, userById, validUser}