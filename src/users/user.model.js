import mongoose, { Schema } from "mongoose"

const ROLES = {
    ADMIN: 'ADMIN',
    DONAR: 'DONAR'
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlenth: 5,
        maxlength: 40
    },
    password: {
        type: String,
        required: true,
        minlenth: 5,
    },
    role: {
        type: String,
        default: ROLES.ADMIN
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)