const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();

app.use(express.json());

dotenv.config();
const port=process.env.port

const db=require('./models/customer.js')
const db1=require('./models/order.js')

app.get('/',function(req,res){
    res.send('the server is started')
})

async function connection(){
    await mongoose.connect('mongodb://localhost:27017/ecommerce_simple')
}

connection();
console.log("db is connected");

db.crud();
console.log('db operation')
db1.crud1();
console.log('db operation')

app.listen(port,async function(){
    console.log(`the server is runnuing on ${port}`)
 })
