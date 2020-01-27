const mongoose = require("mongoose");
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

// const musicPrefSchema = new Schema({
//     //UseridM: { type: Number },
//     MusicGenres1: { type: String },
//     MusicGenres2: { type: String },
//     MusicGenres3: { type: String },
//     MusicGenres4: { type: String }
// });

// const musicPref = model("musicPref", musicPrefSchema);

const userSchema = new Schema({
    //Userid: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    DateOfBirth: { type: Date },
    HomeAddress: { type: String },
    JobTitle: { type: String },
    JobAddress: { type: String },
    musicPref: {
        MusicGenres1: String,
        MusicGenres2: String,
        MusicGenres3: String,
        MusicGenres4: String
    }
}, { collection: "users" });

//CurrentLocation: { type: String }

/** users from google api 
                                        Name: { type: String },
                                        Token: { type: Number },
                                        Email: { type: String },
                                        Provider: { type: String },
                                        Provide_id: { type: Number },
                                        Provide_pic: { type: Number }
                                        */

const user = model("user", userSchema);

module.exports = user;