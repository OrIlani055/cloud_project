const route = require("express").Router();

const Usercontroller = require("../controllers/UserController");

route.post("/createUser", (req, res) => {
    Usercontroller.createData(req, res);
});

route.get("/getAllUsers", (req, res) => {
    Usercontroller.getAll(req, res);
});

route.get("/getOneUser/:Email", (req, res) => {
    Usercontroller.getEmail(req, res);
});

route.put("/update/:Email", (req, res) => {
    Usercontroller.updateUser(req, res);
});

route.delete("/deleteOneUser/:Email", (req, res) => {
    Usercontroller.deleteUser(req, res);
});

route.get("/", (req, res) => {
    res.status(200).send("hello");
});
module.exports = route;