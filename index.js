import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

// function getPost(req, res, next){
//     title = req.body['title'];
//     experience = req.body['experience'];
//     next();
// }

// app.use(getPost);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    res.render("blog.ejs", {
        blogTitle: req.body['blogTitle'],
        blogDescription: req.body['blogDescription']
    })
})

app.listen(port, () => {
    console.log(`Port is listening on ${port}`);
})