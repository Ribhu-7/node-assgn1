const http = require("http");

const server= http.createServer((req,res)=>{
    res.write("hello world")
    res.end();
})

server.listen(8000,()=>{
    console.log("server running")
});

