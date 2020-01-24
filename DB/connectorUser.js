const mongoose = require("mongoose");
//const { DB_USER, DB_PASS, DB_HOST } = require("./constants_user");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/user_repository?retryWrites=true&w=majority`;
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

const schema_Google = {

    desc: String,       //merged my playlists
                        //crete new playlist based on artist
                        //merge playlist with another user
    pl_1: String,       //1st PL id
    pl_2: String,       //2nd PL id
    pl_new: String,     //new PL id
    uid_shares: String, //id of user who shared playlist
                        //if not shared then null
    art_id: String,     //artist id
                        //if merge then null
    art_name: String    //artist name
}
const Google = new mongoose.Schema(schema_Google)


const userSchema = new Schema({
    Userid: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Age: { type: Number },
    HomeAddress: { type: String },
    JobTitle: { type: String },
    JobAdress: { type: String },
    CurrentLocation: { type: String },
});

const user = model("user", userSchema);

module.exports = user;