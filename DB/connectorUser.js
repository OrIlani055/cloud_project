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

const userSchema = new Schema({
    //Userid: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    DateOfBirth: { type: Date },
    HomeAddress: { type: String },
    JobTitle: { type: String },
    JobAdress: { type: String }
    //CurrentLocation: { type: String }

    /** users from google api 
            Name: { type: String },
            Token: { type: Number },
            Email: { type: String },
            Provider: { type: String },
            Provide_id: { type: Number },
            Provide_pic: { type: Number }
            */
});

const user = model("user", userSchema);

module.exports = user;