const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/Contest?retryWrites=true&w=majority`;
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
    .connect(url, options)
    .then(db => console.log(`connected to: ${db.connection.name}`))
    .catch(err => console.error("connection error: ", err));

const { Schema, model } = require("mongoose");

const contestantSchema = new Schema({
    id: { type: Number },
    nameOfSong: { type: String },
    country: { type: String },
    year: { type: Number },
    psalmist: { type: String },
    composer: { type: String },
    performingTheSong: { type: String },
    musicalType: { type: String }
});

const Contestant = model("Contestant", contestantSchema);

module.exports = Contestant;