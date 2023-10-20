import express from "express";
import cors from "cors";
import { router } from "./routes/routes";
const data = require("./products/dados.json")
const port = process.env.PORT || 3333

export const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.get("/produtos", (req, res) => {
        return res.status(200).send(data);
});


app.listen(port, () => console.log(`servidor rodando na porta ${port}!`));