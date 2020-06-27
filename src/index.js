const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');

const CUSTOMER_DB_URL = process.env.CUSTOMER_DB_URL || 'mongodb://localhost:27017/customer-db';
const CUSTOMER_SVC_PORT = process.env.CUSTOMER_SVC_PORT || 3000;

mongoose.connect(CUSTOMER_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) {
        console.error('Error connecting to Customer DB ',err);
    }
    else{
        console.log('----Successfully connected to Customer DB ----');
        
    }
})

app.listen(CUSTOMER_SVC_PORT, () => {
    console.log(`Customer service is running on port ${CUSTOMER_SVC_PORT}`);
});