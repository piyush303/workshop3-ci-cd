const supertest = require('supertest')
const app = require('../src/app');
const Customer = require('../src/models');

const mockCustomer = {
    name: 'Customer-1',
    email: 'customer1@xyz.com',
    age: 25,
    address: 'Address1'
}


Customer.find = jest.fn().mockResolvedValue([
    {
        _id: '123',
        ...mockCustomer
    }
])

Customer.findOne = jest.fn().mockResolvedValue(
    {
        _id: '123',
        ...mockCustomer
    }
)

jest.mock("../src/models/index.js", () => {
    return jest.fn().mockImplementation(() => {
        return {
            save: () => {
                return {
                    _id: '123',
                    ...mockCustomer
                }
            }
        }
    })
})

const request = supertest(app);


describe('Customer API Test', () => {
    
    it('api should have an enpoint customers and should POST operation', async () => {
        const res = await request.post('/customers').send({
            ...mockCustomer
        }).set('Accept', 'applicaton/json');

        expect(res.status).toBe(201);

    });

     it('api should have an enpoint customers and should GET operation', async () => {
        const res = await request.get('/customers');

        expect(res.status).toBe(200);
        expect(res.body).toEqual([{_id: '123',
                    ...mockCustomer}])

    });

    it('api should have an enpoint customers/123 and should GET operation', async () => {
        const res = await request.get('/customers/123');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({_id: '123',
                    ...mockCustomer})

    });
});