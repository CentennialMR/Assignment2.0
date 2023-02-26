let mongoose = require('mongoose');
let bcontactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},

{
    collection:"bcontact"
});



module.exports = mongoose.model('bcontact',bcontactModel);


