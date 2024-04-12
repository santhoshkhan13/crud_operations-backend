// auth controller

const User = require('../model/authModel');
const bcrypt = require('bcryptjs');

// Signup function
exports.signup = async (req, res) => {
    try {
        const { name, email, phoneNumber, password, confirmPassword } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }


        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            phoneNumber,
            password: hashedPassword,
            confirmPassword: undefined 
        });

        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Login function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
