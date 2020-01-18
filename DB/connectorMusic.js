const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_HOST } = require("./constants");

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
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

const musicUserSchema = new Schema({
    UseridM: { type: Number },
    MusicGenres1: { type: String },
    MusicGenres2: { type: String },
    MusicGenres3: { type: String },
    MusicGenres4: { type: String }
});

const musicUser = model("musicUser", musicUserSchema);

module.exports = musicUser;