const User = require("../models/User");

const usersCtrl = {};

usersCtrl.getUsers = async (req,res) => {  
    try {
      const users = await User.find();  
      res.json(users)
    } catch (error) {
        console.error('Error retrieving notes:',error);
        res.status(500).json({error:'Server error'});
    }
}

usersCtrl.createUser = async (req,res) => {
    try {
        const {username} = req.body;
        const newUser = new User({username});
        await newUser.save();
        res.json('User created')
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({message:'Error creating user'});
    }
}

usersCtrl.getUser = async (req,res) => { 
    try {
        const user = await User.findById(req.params.id)
        console.log(user)
        res.json({user});
    } catch (error) {
        console.error('Error get note:', error);
        res.status(500).json({message:'Error get note'});
    }

}

usersCtrl.updateUser = async (req,res) => { 
    try { 
        const {username} = req.body;
        await User.findByIdAndUpdate(req.params.id,{username});
        res.json({message:'Update User'})
     } catch (error) {
        console.error('Error update user:', error);
        res.status(500).json({message:'Error update user'});
    }

}

usersCtrl.deleteUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({message:'Note Deleted'})
    } catch (error) {
        console.error('Error delete user:', error);
        res.status(500).json({message:'Error delete user'});
    }
}

module.exports = usersCtrl;

