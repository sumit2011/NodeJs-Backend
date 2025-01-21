const {connect, disconnect, saveUser, findUser} = require("./db");

const User = require("../models/userModel");
const mongoose = require("mongoose");

// describe, test, expect
jest.mock('./db');

beforeAll(async () => {
    return await connect();
})

describe("User test suite", ()=>{
    test("as a user i want to save a user to the database",async ()=>{
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: "Eric",
            lastName: "clarke",
            address: "123 main st",
            city: "bhagalpur",
            state: "bihar",
            zipCode: "813205",
            email: "sumit0911kmr@gmail.com",
            password: "123"
        });
        const user = await saveUser(newUser);
        expect(user.firstName).toEqual('Eric');
        expect(user.lastName).toEqual('clarke');
        expect(user.address).toEqual('123 main st');
        expect(user.city).toEqual('bhagalpur');
        expect(user.state).toEqual('bihar');
        expect(user.zipCode).toEqual('813205');
        expect(user.email).toEqual('sumit0911kmr@gmail.com');
        expect(user.password).toEqual('123');
    });

    test('as a user i want to find a user by any property' , async ()=> {
        const obj = {email: "sumit0911kmr@gmail.com"};

        await findUser(obj)
            .then((user) => {
                expect(user.firstName).toEqual('Eric');
                expect(user.lastName).toEqual('clarke');
                expect(user.address).toEqual('123 main st');
                expect(user.city).toEqual('bhagalpur');
                expect(user.state).toEqual('bihar');
                expect(user.zipCode).toEqual('813205');
                expect(user.email).toEqual('sumit0911kmr@gmail.com');
                expect(user.password).toEqual('123');
            })
            .catch((err)=>{
                console.log('error' + err.message);
            })
    })
})

afterAll(async () => {
    return await disconnect();
});