import {Schema,model} from "mongoose";

let collection= "cities"

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  continent: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  demonym: {
    type: String,
    required: true
  },
  popularPlaces: {
    type: [String], // Array of strings
    required: true
  },
  climate: {
    type: String,
    required: true
  }
}, { timestamps: true });

let City = model(collection, schema)

export default City