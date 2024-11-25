import joi from "joi-oid"

const schemaCreateItinerary = joi.object({

    city: joi.objectId().required(),
    nameCity: joi.string().required(),
    userPhoto: joi.string().required(),
    price: joi.number().required().min(10000).messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
        "number.min":"el valor minimo de una propiedad es 10000"
    }),
    duration: joi.number().required().messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
    }),
    likes: joi.number().required().messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
    }),
    hashtags: joi.array().items(joi.string()),
    comments: joi.array().items(joi.string()),
    title: joi.string().required(),
    itineraryPhoto: joi.string().required()
})

const schemaCreateItineraries = joi.array().items(joi.object({

    city: joi.objectId().required(),
    nameCity: joi.string().required(),
    userPhoto: joi.string().required(),
    price: joi.number().required().min(10000).messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
        "number.min":"el valor minimo de una propiedad es 10000"
    }),
    duration: joi.number().required().messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
    }),
    likes: joi.number().required().messages({

        "number.base":"Solo se pueden ingresar valores numericos, verifica los datos que estas ingresando",
    }),
    hashtags: joi.array().items(joi.string()),
    comments: joi.array().items(joi.string()),
    title: joi.string().required(),
    itineraryPhoto: joi.string().required()
}))

export {schemaCreateItinerary, schemaCreateItineraries}