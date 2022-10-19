const express=require('express');
const UserController=require('../controller/UserController');

const router=express.Router();

router.post('/GuestReservation',UserController.register);
router.get('/signin',UserController.signin);

module.exports=router;