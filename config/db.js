import mongoose from "mongoose";

const connectDb = async ()=>{

    try{

        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Database : '+ mongoose.connection.host);

    }catch(error){
        console.log('MongoDB error :'+ error)
    }
}

export default connectDb;