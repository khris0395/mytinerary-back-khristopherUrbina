import joi from "joi-oid"

const schemaRegisterUser = joi.object({

    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required()
    .email({ minDomainSegments: 2 })
    .messages({
        "string.empty": 'El email es obligatorio',
        "string.email": 'Correo invalido, verifique los datos ingresados'
    }),
    password: joi.string().required(),
    userPhoto: joi.string().required(),
    country: joi.string().required()
    
    
})

const schemaRegisterUsers = joi.array().items(joi.object({

    userPhoto: joi.string().required(),
    name: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required()
    .email({ minDomainSegments: 2 })
    .messages({
        "string.empty": 'El email es obligatorio',
        "string.email": 'Correo invalido, verifique los datos ingresados'
    }),
    password: joi.string().required(),
    role: joi.number().required().min(1).max(5).messages({
        "number.base": "El valor de role debe ser un número",
        "number.min": "El role menor es 1",
        "number.max": "El role mayor es 5"
    }),
    country: joi.string().required()
    
}))

export {schemaRegisterUser, schemaRegisterUsers}