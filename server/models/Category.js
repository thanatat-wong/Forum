const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
    title: String,
    createAt: Date
});


const Category = mongoose.model('Category', CatagorySchema);
module.exports = Category;