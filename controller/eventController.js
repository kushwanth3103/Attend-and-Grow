const express = require('express');
const router = express.Router();
const EVENT_OBJ = require("../models/event.model");
const bodyParser= require('body-parser')
const multer=require('multer')
const fs = require('fs');
const path = require('path');
const storage=multer.diskStorage({
    destination:function(Request,file,callback)
    {
        callback(null,'./Uploads');
    },
    filename:function(Request,file,callback)
    {
        callback(null,Date.now()+'-'+file.originalname);
    },
});
const upload=multer({storage:storage});
router.use(bodyParser.urlencoded({ extended: true }))
const postEvent = (req,res)=>{
    const details=new EVENT_OBJ({name:req.body.name ,description:req.body.description ,time:req.body.time,date:req.body.date,img:{data:fs.readFileSync(path.join('Uploads/' + req.file.filename)),contentType: 'image/png'},venue:req.body.venue ,tags:req.body.tags,isUsingRegPortal:req.body.isUsingRegPortal,regLink:req.body.regLink});
    try{
        details.save();
        res.send(details);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
}

const getAllEvents = async (req,res)=>{
    const data= await EVENT_OBJ.find().sort({_id:-1});
    res.send(data)
}

const getEvent = (req,res)=>{}

const getParticipants = (req,res)=>{}

const register = (req,res)=>{}

module.exports={postEvent,getAllEvents,getEvent,getParticipants,register,upload};