const mongoose = require('mongoose');


console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_DB)
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB; 


 mongoose.connect(uri,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true,
    dbName:dbName

 } )

 .then(() =>{
    console.log('Database connected!');
 })
 .catch((error) => {
    console.error('Error connecting to the database:',error);
 });