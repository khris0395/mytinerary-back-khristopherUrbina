import joi from "joi-oid"

const schemaDeleteById = joi.object({

    _id: joi.objectId().required()

})

export default schemaDeleteById