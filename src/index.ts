import express from "express";
import cors from "cors";
import { router } from "./routes/routes";
const data = require("./products/dados.json")

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.get("/produtos", (req, res) => res.send(data));

app.listen(3000,() => console.log("servidor rodando!"));