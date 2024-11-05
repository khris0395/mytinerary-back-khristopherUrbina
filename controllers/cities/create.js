import City from "../../models/City.js"

let createCity = async (req,res, next) =>{
    try {
        let city = req.body
        let all = await City.create(city)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        
        next(error)

    }
}

let createCities = async (req,res, next) =>{
    try {
        let cities = req.body
        let all = await City.insertMany(cities)
        return res.status(201).json({
            response: all
        })
    } catch (error) {

        next(error)
    }
}

export {createCity, createCities}