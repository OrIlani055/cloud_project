const route = require("express").Router();

const Usercontroller = require("../controllers/UserController");
const Musiccontroller = require("../controllers/MusicContoller");

route.post("/createUser", (req, res) => {
    Usercontroller.createData(req, res);
});

route.get("/getAllUsers", (req, res) => {
    Usercontroller.getAll(req, res);
});

route.get("/getOneUser/:Userid", (req, res) => {
    Usercontroller.getID(req, res);
});

route.put("/update/:Userid", (req, res) => {
    Usercontroller.updateUser(req, res);
});

route.delete("/deleteOneUser/:Userid", (req, res) => {
    Usercontroller.deleteUser(req, res);
});

route.get("/", (req, res) => {
    res.status(200).send("hello");
});


//------------------------------------------------------//

route.post("/createMusic", (req, res) => {
    Musiccontroller.createData(req, res);
});

route.get("/getAllMusic", (req, res) => {
    Musiccontroller.getAllMusic(req, res);
});

route.get("/getOneUser/:Userid", (req, res) => {
    Musiccontroller.getIDMusic(req, res);
});

route.put("/update/:Userid", (req, res) => {
    Musiccontroller.updateMusic(req, res);
});

route.delete("/deleteOneUser/:Userid", (req, res) => {
    Musiccontroller.deleteMusic(req, res);
});



module.exports = route;