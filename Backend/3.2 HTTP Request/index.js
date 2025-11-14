import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello! Welcome to the HTTP Request Example using Express.js</h1>");
    
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});