import City from "../../models/City.js"

let allCities= async (req,res, next)=>{

    try {
        let {name} = req.query
        let query= {}

        if (name) {

            query.name= {$regex : "^"+name, $options : "i"}
            
        }

        let all= await City.find(query)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

/*let all= await City.find()
        return res.status(200).json({
            response: all*/

let citiesByName = async (req,res, next)=>{

    try {

        let nameQuery = req.params.x
        let all= await City.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let citiesById = async (req,res, next)=>{

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


export {allCities, citiesByName, citiesById}