const mongojs = require("mongojs");
const assert  = require("assert");
const uri = "mongodb+srv://Tuckster:Tuckster786@cluster0.9ysxk.mongodb.net/mydb?retryWrites=true&w=majority";
const collection = ["notes"];
mydb = mongojs(uri, collection);
