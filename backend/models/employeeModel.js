import mongoose from "mongoose";
import { Schema } from "mongoose";


const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    workArea: {
        type: String,
        required: true
    },
    yearsOfService: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
})

export const Employee = mongoose.model("employee", employeeSchema)