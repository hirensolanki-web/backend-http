const http = require("http");

const server =  http.createServer ((req, res) => {
  console.log(req.url, req.method);
})

server.listen(2020,(err,data)=>{
  console.log("server is running on port 2020");
})















