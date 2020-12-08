const express = require('express');

var router = express.Router();

var ObjectId= require('mongoose').Types.ObjectId;

var { Feedback } = require('../models/feedback');

router.get('/',(req,res)=>{
    Feedback.find((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('Error in Retriving feedbacks '+err);
        
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id:${req.params.id}`);
    else
        Feedback.findById(req.params.id,(err,doc)=>{
            if(!err)
                res.send(doc);
            else
                console.log('Error in finding by id: ',err);
        });

});


router.post('/', (req,res)=>{
    var feedback = new Feedback({
        username: req.body.username,
        eventname: req.body.eventname,
        eventreview: req.body.eventreview
    });
    feedback.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else
            console.log('Error in adding feedback details to the database '+err);
    });
});

module.exports = router;