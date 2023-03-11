// import http
const http = require("http")

// create server with http
const server = http.createServer((req, res)=> {
    console.log("server is created")
})
// initial port
const PORT = 5500;
// listen to sever
server.listen(PORT, ()=> console.log(`server is rinning on port ${PORT}`))