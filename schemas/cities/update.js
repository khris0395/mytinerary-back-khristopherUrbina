import joi from "joi-oid"

const schemaUpdateDescription = joi.object({

    _id: joi.objectId().required(),
    description: joi.string().required()

})

export default schemaUpdateDescription