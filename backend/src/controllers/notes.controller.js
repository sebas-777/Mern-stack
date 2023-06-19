const Note =  require('../models/Note');

const notesCtrl = {};

notesCtrl.getNotes = async (req,res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error('Error retrieving notes:',error);
    res.status(500).json({error:'Server error'});
  }
};
      
notesCtrl.createNotes = async (req,res) => { 
  try {
  const{title,content,date,author} = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author
  });
  await newNote.save();
  res.json({message:'Notes saved'})
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({message:'Error creating note'});
  }
};

notesCtrl.getNote = async (req,res) =>  {
  try { 
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json({note})
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({message:'Error creating note'});
  }
}

notesCtrl.updateNotes = async (req,res) => {
  try {
    const {title,content,author} = req.body;
    await Note.findByIdAndUpdate (req.params.id,{
      title,
      author,
      content
    })
    res.json({message:'Note Update'})
  } catch (error) {
    console.error('Error update note:', error);
    res.status(500).json({message:'Error update note'});
  }
}

notesCtrl.deleteNotes = async (req,res) => { 
  try { 
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:'Note delete'})
  } catch (error) {
    console.error('Error deleted note:', error);
    res.status(500).json({message:'Error deleted note'});
  }

}

module.exports = notesCtrl;
