import {Schema,model} from "mongoose";

let collection= "itineraries"

const schema = new Schema({
    city: {type: Schema.Types.ObjectId, ref: "cities", required: true},
    nameCity: {type: String, required: true},
    userPhoto: {type: String, required: true},
    userName: {type: String, required: true},
    price: {type: String, required: true},
    duration: {type: Number, required: true},
    likes: {type: Number, required: true},
    hashtags: {type: [String], required: true},
    comments: {type: [String], required: true},
    title: {type: String, required: true},
    itineraryPhoto: {type: String, required: true}
  }, { timestamps: true });

  let Itinerary = model(collection, schema)
  
  export default Itinerary

