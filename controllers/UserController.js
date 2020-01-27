const user_repository = require("../DB/connectorUser");

class UserController {
    static async createData(req, res) {
        try {
            let obj = user_repository({
                //Userid: req.body.Userid,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email,
                DateOfBirth: req.body.DateOfBirth,
                HomeAddress: req.body.HomeAddress,
                JobTitle: req.body.JobTitle,
                JobAddress: req.body.JobAddress
                    //CurrentLocation: req.body.CurrentLocation
                    /**   users from google api 
                                                                            Token: req.body.Token,
                                                                            Email: req.body.Email,
                                                                            Provider: req.body.Provider,
                                                                            Provide_id: req.body.Provide_id,
                                                                            Provide_pic: req.body.Provide_pic
                                                                            */
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
            let data = await user_repository.find({
                    //Userid: req.params.Userid
                    Email: req.params.Email
                },
                err => {
                    if (err) throw err;
                }
            );

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async getAll(req, res) {
        try {
            let data = await user_repository.find({}, err => {
                if (err) throw err;
            });

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async updateUser(req, res) {
        try {
            let obj = await user_repository.find({
                    //Userid: req.params.Userid
                    Email: req.params.Email
                },
                err => {
                    if (err) throw err;
                }
            );
            if (obj.length == 0) throw { msg: "error" };
            obj = obj[0];

            console.log(req.body);

            if (req.body.FirstName) obj.FirstName = req.body.FirstName;
            if (req.body.LastName) obj.LastName = req.body.LastName;
            if (req.body.Email) obj.Email = req.body.Email;
            if (req.body.DateOfBirth) obj.DateOfBirth = req.body.DateOfBirth;
            if (req.body.HomeAddress) obj.HomeAddress = req.body.HomeAddress;
            if (req.body.JobTitle) obj.JobTitle = req.body.JobTitle;
            if (req.body.JobAddress) obj.JobAddress = req.body.JobAddress;

            let data = await user_repository.updateOne({
                    //Userid: req.params.Userid
                    Email: req.params.Email
                },
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

    static async deleteUser(req, res) {
        try {
            console.log(req.body);
            /** let deleteOne = await user_repository.deleteOne({ Userid: req.params.Userid },
                                                    err => {
                                                        if (err) throw err;
                                                    }
                                                */
            let deleteOne = await user_repository.deleteOne({ Email: req.params.Email },
                err => {
                    if (err) throw err;
                }
            );
            res.status(200).send("deleted");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }
}

module.exports = UserController;