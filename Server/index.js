var express     = require('express')
var MongoClient = require('mongodb').MongoClient
var app         = express()
var dataBaseFunctions = require('./dataBaseFunctions.js');

const uri = "mongodb+srv://Tuckster:<password>@cluster0.9ysxk.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = "mydb"
const PORT = 45434
var mydb = null

//connect to db
MongoClient.connect(uri, function(err, client){
    if(err){
        console.error('An error Occured connecting to db: ', err);
    }
    else{
    console.log("Connected successfully to server");
    mydb = client.db(database);
    }
})

//listing
app.listen(PORT, ()=>{console.log("listening on " + PORTNUMBER)})
app.use(express.json());