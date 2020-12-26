var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    facebookId: String,
    admin:   {
        type: Boolean,
        default: false
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);