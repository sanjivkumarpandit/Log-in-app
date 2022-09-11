const { request } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const  signUpTemplateCopy = require('../models/signupModels')

router.post('/signup',async (request,response) =>{
    // const salt_pass = await bcrypt.genSalt(10);
    // const secure_pass = await bcrypt.hash(request.body.password, salt_pass);
    const signUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signUpUser.save()
    .then(data =>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error);
    })
})
router.get('/signup',async (req,response)=>{
    let data = await signUpTemplateCopy.find();
    response.send(data);
})
module.exports = router;
