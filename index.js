import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Port is listening on ${port}`);
})