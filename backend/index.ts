import express from "express";
import { json } from "stream/consumers";

const app: express.Express = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes here

type User = {
    id: number;
    name: string;
    password: string;
};

const users: User[] = [
    { id: 1, name: "太郎", password: "12345" },
    { id: 2, name: "次郎", password: "12345" },
    { id: 3, name: "花子", password: "12345" },
];

app.listen(port, () => {
    console.log("listen");
});

app.get("/", (req, res) => {
    res.send(JSON.stringify(users));
});
