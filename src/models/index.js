const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    address: String
})

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;