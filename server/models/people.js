var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name:  { type: String, required: true},
}, {timestamps: true });

mongoose.model('People', PeopleSchema);
var People = mongoose.model('People')

// Use native promises
mongoose.Promise = global.Promise;