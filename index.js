var express = require("express");
const env = require("dotenv").config();
const { google } = require("googleapis");
const route = require("./routes/api");
const googlecon = require("./controllers/GoogleController");
var app = express();

//googlecon.startauth();

var port = process.env.PORT || 3000;

app.use(express.json());

// app.get("/welcome", (req, res) => {
//     res.send("welcome");
// });

app.use("/", route);

app.listen(port, () => {
    console.log("running on port" + port);
});