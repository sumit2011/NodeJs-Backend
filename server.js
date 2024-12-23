const http = require("http");
const app = require("./app/app")
require('dotenv').config();


http.createServer(app).listen(process.env.port, () => {
    console.log(`server is runnig on port: ${process.env.port}`);
});