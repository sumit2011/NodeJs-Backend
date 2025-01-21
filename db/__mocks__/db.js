
const connect = async () => {
    console.log("mongodb mocked connection")
};

const disconnect = async() => {
    console.log("mongodb mocked disconnection")

};

// obj {email: req.body.email()}
const findUser = async (obj)=> {
    return Promise.resolve({
        firstName: "Eric",
        lastName: "clarke",
        address: "123 main st",
        city: "bhagalpur",
        state: "bihar",
        zipCode: "813205",
        email: "sumit0911kmr@gmail.com",
        password: "123"
    })
};

const saveUser = async (newUser) => {
    return Promise.resolve({
        firstName: "Eric",
        lastName: "clarke",
        address: "123 main st",
        city: "bhagalpur",
        state: "bihar",
        zipCode: "813205",
        email: "sumit0911kmr@gmail.com",
        password: "123"
    })
}

module.exports = {connect , disconnect, findUser, saveUser};