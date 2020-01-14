const DBcon = require("../DB/connector");

class UserController {
    static async CreateUser(req, res) {
        try {
            let obj = user({
                Userid: req.body.id,
                FirstName: req.body.nameOfSong,
                LastName: req.body.country,
                Age: req.body.year,
                HomeAddress: req.body.psalmist,
                JobTitle: req.body.composer,
                JobAddress: req.body.performingTheSong,
                CurrentLocation: req.body.musicalType
            });
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

module.exports = DBconController;