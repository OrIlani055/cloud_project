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

const userSchema = new Schema({
    Userid: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Age: { type: Number },
    HomeAddress: { type: String },
    JobTitle: { type: String },
    JobAdress: { type: String },
    CurrentLocation: { type: String }
});

const user = model("user", userSchema);

module.exports = user;