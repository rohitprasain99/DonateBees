import mongoose, { Schema } from "mongoose";

const beneficiarySchema = new Schema({
    beneficiaryName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    billAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Beneficiary', beneficiarySchema)