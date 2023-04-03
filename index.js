const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors');

const postController = require("./controller.js/postController")
const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const atls_url = "mongodb+srv://InstaClone:Bhagya%400610@cluster0.ronaekp.mongodb.net/";

// const atls_url = "mongodb://localhost/post"

mongoose.connect(atls_url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Cloud MongoDB ATLAS");
})


app.post("/api/image", postController.addPost)


app.get("/api/image", postController.getPosts);

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});