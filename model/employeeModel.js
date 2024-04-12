const mongoose = require('mongoose');
const User = require('./authModel');

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        mobileNumber: {
            type: String
        },
        department: {
            type: String,
            required: [true, "department is mandatory"],
            minlength: 8,
            select: false
        },
        designation: {
            type: String,
            required: [true, "designation is  required"],
        },
        adminId: {
            type: mongoose.Types.ObjectId,
            required: [true, "User ID not available"],
            ref: 'User' // Assuming 'User' is the name of your User model
        }
    },
    { timestamps: true }
)

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee