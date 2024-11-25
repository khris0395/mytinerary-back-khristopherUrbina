import joi from "joi-oid"

const schemaUpdateLikes = joi.object({

    _id: joi.objectId().required(),
    likes: joi.number().required()

})

export default schemaUpdateLikes