const UserSchema= require('../model/User');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const register=(require,response)=>{

    UserSchema.findOne({email:req.body.email}).then(result=>{
        if (result===null){
            bcrypt.hash(req.body.password, 10, function (err, hash) {

                const dto = new UserSchema({
                    name: req.body.name,
                    email: req.body.email,
                    contactNumber: req.body.contactNumber,
                    password: hash,
                    retypePassword: req.body.retypePassword
                });

                dto.save().then(response => {
                    response.status(201).json({status: true, token: 'empty', massage: 'success..'});
                }).catch(onerror => {
                    response.status(500).json(onerror);
                })
            })
        }

        else {
            response.status(400).json({massage:'Already Exists'})
        }
    }).catch(error=>{
        response.status(500).json(onerror);
    })


}
const signin=(request,response)=> {
    UserSchema.findOne({email: req.headers.email}).then(response => {
        if (respo === null) {
            resp.status(404).json({message: 'Empty Result'})
        } else {
            bcrypt.compare(req.headers.password, response.password, function (err, result) {
                if (result) {
                    resp.status(200).json({status: true, token: 'empty', message: 'Success..'})
                } else {
                    resp.status(401).json({status: false, token: 'empty', message: 'UnAuthorized..'});
                }
            });
        }
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports={
    register,signin
}