import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    price: Number
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
