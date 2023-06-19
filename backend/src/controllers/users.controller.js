const usersCtrl = {};

usersCtrl.getUsers = (req,res) => res.json({message:[]})

usersCtrl.createUser = (req,res) => res.json({message:'User Saved'})

usersCtrl.getUser = (req,res) => res.json({title:'assdfekkklklkl'})

usersCtrl.updateUser = (req,res) => res.json({message:'Note  U'})

usersCtrl.deleteUser = (req,res) => res.json({message:'Note Deleted'})

module.exports = usersCtrl;

