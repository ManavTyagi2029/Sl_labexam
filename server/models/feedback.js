const mongoose = require('mongoose');

var Feedback = mongoose.model('Feedback',{
    username: { type: String },
    eventname: { type: String },
    eventreview: { type: String }    
});

module.exports = {Feedback};