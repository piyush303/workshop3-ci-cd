const express = require('express');
const {
  fetchAllCustomers,
  fetchCustomerById,
  createNewCustomer,
} = require("../controllers");
const router = express.Router();

router.get('/customers', fetchAllCustomers);
router.get('/customers/:id', fetchCustomerById);
router.post('/customers', createNewCustomer);


module.exports = router;