const mongoose  = require("mongoose");
const Connector = require("../models/connector");
const User      = require("../models/user");

const connector = [{
        "id" : 1,
        "name" : "Lorem Ipsum",
        "type" : "REST",
        "privacy" : "PRIVATE",
        "base_url" : "https://loremipsum.com",
        "logo_url" : "https://loremipsum.jpg",
        "category" : "Lorem",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "status" : true
    },
    {
        "id" : 2,
        "name" : "Lorem Ipsum",
        "type" : "REST",
        "privacy" : "PUBLIC",
        "base_url" : "https://loremipsum.com",
        "logo_url" : "https://loremipsum.jpg",
        "category" : "Lorem",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "status" : true
    },
    {
        "id" : 3,
        "name" : "Lorem Ipsum",
        "type" : "BD",
        "privacy" : "PRIVATE",
        "base_url" : "https://loremipsum.com",
        "logo_url" : "https://loremipsum.jpg",
        "category" : "Lorem",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "status" : false
    }];

const user = [new User({
    "name" : "Kiane Lucia Casagrande",
    "email" : "kiane@example.com",
    "password" : "123456"
}), new User({
    "name" : "Kamille Casagrande",
    "email" : "kamille@example.com",
    "password" : "12345"
}),];

//connect mongoose
mongoose.connect("mongodb://localhost:27017/devapi", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

function addConnector() {
    Connector.insertMany(connector).then(() => {
        console.log("DONE! --Connector ");
        mongoose.disconnect();
    }).catch((error) => {
        console.log(error);
    });
}

//save your data. 
user.map(async (obj, index) => {
    await obj.save((err, result) => {
      if (index === user.length - 1) {
        console.log("DONE!");
        addConnector();
      }
    });
});