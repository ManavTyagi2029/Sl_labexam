const mongoose = require('mongoose');

//uri='mongodb+srv://utiwari18:splzVfmwtzoqDbqK@cluster0.audch.mongodb.net/Feedback?retryWrites=true&w=majority';
uri='mongodb+srv://adminManav:rKFZpmMZnXz21IjY@cluster0.ucifd.mongodb.net/labexamdb?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(!err)
        console.log('MongoDB connection successful');
    else
        console.log(err);
    
});

module.exports = mongoose;
