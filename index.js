var express = require("express");
const {google} = require('googleapis');
const route = require("./routes/api");
const googlecon = require('./controllers/GoogleController');
var app = express();


googlecon.startauth();

var port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome");
});

app.use("/api", route);

app.listen(port, () => {
    console.log("running on port" + port);
});
