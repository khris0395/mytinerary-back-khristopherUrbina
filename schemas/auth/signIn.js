import joi from "joi-oid"

const schemaSignIn = joi.object({

    email: joi.string().required()
    .email({ minDomainSegments: 2 })
    .messages({
        'string.empty': 'El email es obligatorio',
        'string.email': 'Correo invalido, verifique los datos ingresados'
    }),
    password: joi.string().required()

})


export default schemaSignIn