const music_repository = require("../DB/connectorMusic");

class MusicController {
    static async createMusicData(req, res) {
        try {
            let obj = music_repository({
                //_id: req.body._id,
                MusicGenres1: req.body.MusicGenres1,
                MusicGenres2: req.body.MusicGenres2,
                MusicGenres3: req.body.MusicGenres3,
                MusicGenres4: req.body.MusicGenres4
            });
            console.log(obj);
            await obj.save();

            res.status(200).send("Music Constrains addedn");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async getIDMusic(req, res) {
        try {
            let data = await music_repository.find({ _id: req.params._id }, err => {
                if (err) throw err;
            });

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async getAllMusic(req, res) {
        try {
            let data = await music_repository.find({}, err => {
                if (err) throw err;
            });

            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error occured");
        }
    }

    static async updateMusic(req, res) {
        try {
            let obj = await music_repository.find({ _id: req.params._id }, err => {
                if (err) throw err;
            });
            if (obj.length == 0) throw { msg: "error" };
            obj = obj[0];

            console.log(req.body);

            if (req.body.MusicGenres1) obj.MusicGenres1 = req.body.MusicGenres1;
            if (req.body.MusicGenres2) obj.MusicGenres2 = req.body.MusicGenres2;
            if (req.body.MusicGenres3) obj.MusicGenres3 = req.body.MusicGenres3;
            if (req.body.MusicGenres4) obj.MusicGenres4 = req.body.MusicGenres4;

            let data = await music_repository.updateOne({ _id: req.params._id },
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

    static async deleteMusic(req, res) {
        try {
            console.log(req.body);
            let deleteOne = await music_repository.deleteOne({ _id: req.params._id },
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

module.exports = MusicController;