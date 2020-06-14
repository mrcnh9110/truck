const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer: String
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;