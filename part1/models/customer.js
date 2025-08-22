function crud(){
    const customerSchema=new mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        phone:{type:String,required:true},
        address:{type:String,required:true},
        createdAt:{type:Date,default: Date.now}
    }) ;
    const cust=mongoose.model('cust', customerSchema);
}
module.exports={
    crud
}