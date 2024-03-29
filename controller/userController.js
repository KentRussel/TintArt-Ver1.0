const User = require("../models/userModel");

const createUser = async (req, res) =>{
    const email = req.body.email;
    const findUser = await User.find({ email: email });
    if(!findUser) {
        //create a new user
        const newUser = User.create(req.body);
        console.log(newUser);
        res.json(newUser);
    }

    else
    {
        //user already exists
        res.json({
            msg:"User already exists",
            success: false,
        });
    }
};

module.exports = {createUser};