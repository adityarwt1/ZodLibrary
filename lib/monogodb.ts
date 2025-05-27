import mongoose  from "mongoose";

const  connectToDatabase = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName:"ZodConnection"
        })
        console.log("connected to mongo db")
    } catch (error) {
        console.log("error while connecting to mongodb", error)
    }
}

export default connectToDatabase