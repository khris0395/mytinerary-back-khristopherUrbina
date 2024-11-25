import joi from "joi-oid"

const schemaUpdateName = joi.object({

    _id: joi.objectId().required(),
    name: joi.string().required()

})

const schemaUpdateRole = joi.object({

    _id: joi.objectId().required(),
    role: joi.number().required().min(1).max(5).messages({
        "number.base": "El valor de role debe ser un número",
        "number.min": "El role menor es 1",
        "number.max": "El role mayor es 5"
    })

})

export {schemaUpdateName, schemaUpdateRole}