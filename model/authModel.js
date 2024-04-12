const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')

const authSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"]
        },
        email:{
            type: String,
            required:[true, "Email is required"]
        },
        phoneNumber:{
            type: String,
            required: [true,"phoneNumber is required"]
        },
        password:{
            type: String,
            required:[true,"Password is mandatory"],
            minlength: 8,
            select: false
        },
        confirmPassword:{
            type : String,
            required:[true,"Confirm password is also required"],
            validate:{
                validator: function (el) {
                    return el === this.password
                }
            }
        },
    },
    { timestamps: true }
)

const User = mongoose.model('User', authSchema)
module.exports = User