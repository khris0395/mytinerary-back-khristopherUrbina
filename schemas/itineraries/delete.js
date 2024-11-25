import joi from "joi-oid"

const schemaDeleteById = joi.object({

    _id: joi.objectId().required()

})

const schemaDeleteByNameCity = joi.object({

    nameCity: joi.string().required()

})

export {schemaDeleteById, schemaDeleteByNameCity}