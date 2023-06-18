const {MongoClient} = require('mongodb');


console.log(process.env.MONGODB_URI);
console.log(process.env.MONGODB_DB)
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

async function connect(){
    try {
        const client = new MongoClient(uri,{useUnifiedTopology:true});
        await client.connect();
        const db = client.db(dbName);
        console.log('Database connected!');
        client.close();
    } catch (error) { 
        console.error('Error connecting to the database:',error);
        
    }
} 

connect();