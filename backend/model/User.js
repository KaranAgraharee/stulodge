import mongoose from "mongoose"
const UserSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    ConfirmPassword:{
        type: String,
        required: true,
    }
},{timestamp: true})

export const UserModel = mongoose.model('Users', UserSchema)