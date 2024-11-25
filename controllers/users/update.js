import User from "../../models/User.js"

const updateName =  async (req,res, next) =>{

    try {

        let user = req.body
        let upd = await User.findByIdAndUpdate(

            {_id: user._id},
            {name: user.name}

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

const updateRole =  async (req,res, next) =>{

    try {

        let user = req.body
        let upd = await User.updateOne(

            {_id: user._id},
            {role: user.role}

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


export {updateName, updateRole}