const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contactNumber:{type:Number,required:true},
    Password:{type:String,required:true},
    retypePassword:{type:String,required:true}
});

module.exports=mongoose.model('User',UserSchema);