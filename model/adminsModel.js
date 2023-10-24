const mongoose = require("mongoose");

const adminsModel = mongoose.model("admins",{
    email : {type : String},
    password : {type : String}
});

module.exports = adminsModel;