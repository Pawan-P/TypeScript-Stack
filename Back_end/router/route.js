const express = require('express');
const router = express.Router();

const User = require('../model/userSchema');


router.post('/register', async (req, res) => {
    const { email, name, mobile } = req.body;
    console.log(req.body)

    if( !email || !name || !mobile){
        return res.status(422).json("Can't process! Please fill the details");
    } 
    try{
        const userExist = await User.findOne({email: email} && {mobile: mobile});

        if(userExist){
            return res.status(409).json({error: "User Already Exists"});
        }

        const user = new User({ email, name, mobile });

        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({ message: "User Registered" });
        }
    } catch(err){
        console.log(err);
    }    
});

router.post('/login', async (req, res) => {
    const { mobile } = req.body;
    console.log(req.body)

    if( !mobile){
        return res.status(422).json("Can't process! Please fill the details");
    }
    const userExist = await User.findOne({mobile: mobile});
    if(userExist){
        console.log('yeah')
        return res.status(201).json({message: "User Exists"})        
    } 
    console.log('no')
    return res.json({ error: "User not Registered! Please Register" });
    } 
);


module.exports = router;