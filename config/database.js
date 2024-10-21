import mongoose from "mongoose";

let url= process.env.URI_MONGO

async function connectionDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        console.log("Base de datos no conectada");
        
    }
}

connectionDataBase()