import mongoose from "mongoose"


export const connectDB = async() =>{
const mongo_url = process.env.MONGODB_URI||'mongodb+srv://karanagraharee:krn010104@cluster0.jb9px.mongodb.net/ExpenseTracker'

mongoose.connect(mongo_url).then(()=>{
    console.log('MongoDB Connected...')
}).catch((error)=>console.log('MongoDB Connection Error:', error))
}
