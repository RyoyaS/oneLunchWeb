import express from "express";

const app: express.Express = express();
const port = 3000;

// Define your routes here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
