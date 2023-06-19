const notesCtrl = {};

notesCtrl.getNotes = (req,res) => res.json({message:[]}) 

notesCtrl.createNotes = (req,res) => res.json({message:'Notes saved'})

notesCtrl.getNote = (req,res) =>  res.json({title:'jhkojhkjkl'})

notesCtrl.updateNotes = (req,res) => res.json({message:'User U'})

notesCtrl.deleteNotes = (req,res) => res.json({message:'User delete'})



module.exports = notesCtrl
