require('dotenv').config();
const User = require('../models/User');

const getUsersData = async (req, res) => {
    const pass = req.query.pass;
    try {
        if (pass === process.env.SECRET_PASS) { // Fetch all users from the database after checking the password entered by the admin
            const users = await User.find();  
            res.status(200).json(users);
        }
        else{
            res.status(401).json({message: "Not Authorized!"});
        }
        
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch user data', error: err.message });
    }
};

module.exports = { getUsersData };
