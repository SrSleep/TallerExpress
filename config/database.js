import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);

async function conectado() {
    try {
        await mongoose.connect(url)
        console.log("ojala sirva");
        
    } catch (error) {
        console.log(error);
        
    }
    
}

conectado()
