import joi from "joi-oid"

const schemaCreateCity = joi.object({

    name: joi.string().required(),
    photo: joi.string().required(),
    country: joi.string().required(),
    continent: joi.string().required(),
    description: joi.string().required(),
    currency: joi.string().required(),
    demonym: joi.string().required(),
    popularPlaces: joi.array().required().items(joi.string()),
    climate: joi.string().required()
})

const schemaCreateCities = joi.array().items(joi.object({

    name: joi.string().required(),
    photo: joi.string().required(),
    country: joi.string().required(),
    continent: joi.string().required(),
    description: joi.string().required(),
    currency: joi.string().required(),
    demonym: joi.string().required(),
    popularPlaces: joi.array().required().items(joi.string()),
    climate: joi.string().required()
}))

export {schemaCreateCity, schemaCreateCities}