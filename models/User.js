import {Schema,model} from "mongoose";

let collection= "users"

const schema = new Schema({

    userPhoto: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true},
    online: {type: Boolean},
    country: {type: String}

  }, { timestamps: true });

  let User = model(collection, schema)
  
  export default User
