const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    contactType: {
        type: String
    },
    agree: {
        type: Boolean
    },
    email: {
        type: String
    },
    telnum: {
        type: String
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;