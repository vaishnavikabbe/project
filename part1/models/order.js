function crud1(){
const orderSchema=new mongoose.Schema({
    customerEmail: {type:String, required:true},
    productName: {type:String, required:true},
    quantity :{type:Number, required:true},
    price :{type:Number, required:true},
    status :{type:String, enum: ['pending', 'completed'], default: 'pending'},
    createdAt: {type:Date, default: Date.now}
     });
 const order=mongoose.model('order', orderSchema);}
 module.exports={
    crud1
}