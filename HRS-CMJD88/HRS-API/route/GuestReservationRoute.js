const express=require('express');
const GuestReservationController=require('../controller/GuestReservationController');

const router=express.Router();
router.post('/GuestReservation',GuestReservationController.GuestReservation);

module.exports=router;