import mongoose from "mongoose";

// Schema is now the value to the key Schema in mongoose
const Schema = mongoose.Schema;

// Schema is going to contain an argument
const OrderSchema = Schema({
    items: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {timestamps: true});

// now the Order model can be used anywhere in our application
export const Order = mongoose.model("Order", OrderSchema);
