var express = require("express");
const route = require("./routes/api");
var app = express();

var port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome");
});

app.use("/api", route);

app.listen(port, () => {
    console.log("running on port" + port);
});