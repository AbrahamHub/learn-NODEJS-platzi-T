const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("hello word\n");
});

server.listen(8000);
console.log("Servidor en la URL http://localhost:8000");