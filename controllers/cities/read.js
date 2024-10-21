import City from "../../models/City.js"

let allCities= async (req,res, next)=>{

    try {

        let all= await City.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

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

let citiesByCountry = async (req,res, next)=>{

    try {

        let countryQuery = req.params.x
        let all= await City.find({ country : countryQuery })
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

let citiesByClimate = async (req,res, next)=>{

    try {

        let climateQuery = req.params.x
        let all= await Employee.find({climate : climateQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        next(error)
    }
}

export {allCities, citiesByName, citiesByCountry, citiesByClimate}