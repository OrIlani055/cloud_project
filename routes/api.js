const route = require("express").Router();

const Usercontroller = require("../controllers/UserController");
const Musiccontroller = require("../controllers/MusicContoller");

route.post("/createUser", (req, res) => {
    Usercontroller.createData(req, res);
});

route.get("/getAllContest", (req, res) => {
    Usercontroller.getAll(req, res);
});

route.get("/getOneContest/:id", (req, res) => {
    Usercontroller.getID(req, res);
});

route.put("/update/:id", (req, res) => {
    Usercontroller.updateContest(req, res);
});

route.delete("/deleteOneContest/:id", (req, res) => {
    contest.deleteContest(req, res);
});

route.get("/", (req, res) => {
    res.status(200).send("hello");
});

module.exports = route;