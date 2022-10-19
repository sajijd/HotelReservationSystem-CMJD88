const mongoose=require('mongoose');
const GuestReservationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contactNumber:{type:Number,required:true},
    checkInDate:{type:String,required:true},
    checkOutDate:{type:String,required:true},
    roomNumber:{type:String,required:true},
    special:{type:String,required:false},
});

module.exports=mongoose.model('Guest',GuestReservationSchema);