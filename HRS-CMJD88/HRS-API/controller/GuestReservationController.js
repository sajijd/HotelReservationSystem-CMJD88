const Guest=require('../model/GuestReservationChema');


const GuestReservation=(req,response)=>{
    const tempGuest=new Guest({
        name:req.body.name,
        email:req.body.email,
        contactNumber:req.body.contactNumber,
        checkInDate:req.body.checkInDate,
        checkOutDate:req.body.checkOutDate,
        roomNumber:req.body.roomNumber,
        special:req.body.special
    });
    tempGuest.save().then(result=>{
        response.stats(201).json({status:true,message:'Saved..'})
    }).catch(error=>{
        response.stats(500).json(error);
    })
}



//res
module.exports={
    GuestReservation,
}
