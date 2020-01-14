const user_repository = require("../DB/connector");

class UserController {
    static async createData(req, res) {
        try {
            let obj = user_repository({
                Userid: req.body.Userid,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Age: req.body.Age,
                HomeAddress: req.body.HomeAddress,
                JobTitle: req.body.JobTitle,
                JobAddress: req.body.JobAddress,
                CurrentLocation: req.body.CurrentLocation
            });
            console.log(obj);
            await obj.save();

            res.status(200).send("User-Created");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async getID(req, res) {
        try {
            let data = await DBcon.find({ id: req.params.id }, err => {
                if (err) throw err;
            });

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async getAll(req, res) {
        try {
            let data = await DBcon.find({}, err => {
                if (err) throw err;
            });

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async UpdateUser(req, res) {
        try {
            let obj = await DBcon.find({ userid: req.params.userid }, err => {
                if (err) throw err;
            });
            if (obj.length == 0) throw { msg: "error" };
            obj = obj[0];

            console.log(req.body);

            if (req.body.FirstName) obj.FirstName = req.body.FirstName;
            if (req.body.LastName) obj.LastName = req.body.LastName;
            if (req.body.Age) obj.Age = req.body.Age;
            if (req.body.HomeAddress) obj.HomeAddress = req.body.HomeAddress;
            if (req.body.JobTitle) obj.JobTitle = req.body.JobTitle;
            if (req.body.JobAddress) obj.JobAddress = req.body.JobAddress;

            let data = await DBcon.updateOne({ userid: req.params.userid },
                obj,
                err => {
                    if (err) throw err;
                }
            );
            res.status(200).send("User updated");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async deleteContest(req, res) {
        try {
            console.log(req.body);
            let deleteOne = await DBcon.deleteOne({ id: req.params.id }, err => {
                if (err) throw err;
            });
            res.status(200).send("deleted");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }
}

module.exports = UserController;