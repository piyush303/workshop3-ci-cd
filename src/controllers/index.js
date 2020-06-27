const Customer = require('../models');

const fetchAllCustomers = async (req,res) => {
    try {
        const customers = await Customer.find();
        res.status(200).send(customers);
    } catch (e) { 
        console.error('---Error fetching all customers ---',e);
        res.status(500).send({message: 'Error fetching Customers information'})        
    }
}


const fetchCustomerById = async (req, res) => {
    const id = req.params.id;
    try {
        const customer = await Customer.findOne({_id: id});
        res.status(200).send(customer);
    } catch (e) {
        console.error('---Error fetching all customers ---',e);
        res.status(500).send({message: 'Error fetching Customer information for ',id})        
    }
};


const createNewCustomer = async (req, res) => {
    console.log('---req.body---',req.body);
    const {name, email, age, address } =  req.body;
    try {
        const newCustomer = new Customer({
            name, email, age, address
        })
        const customer = await newCustomer.save();
        res.status(201).send(customer);
    } catch (e) {
        console.error('---Error fetching all customers ---',e);
        res.status(500).send({message: 'Error fetching Customers information'})        
    }
};
module.exports = { fetchAllCustomers, fetchCustomerById, createNewCustomer };