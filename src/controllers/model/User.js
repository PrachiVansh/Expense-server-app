const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//schema
const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : [true, "First name is required"],
    },
    lastname : {
        type : String,
        required : [true, "Last name is required"],
    },
    email : {
        type : String,
        required : [true, "Email name is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password name is required"],
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
},
    {
      timestamp: true,
    }
);

//Hash password
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//compile schema into model
const User = mongoose.model("User", userSchema);
module.exports = User;
