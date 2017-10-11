var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
    showAll: function(req, res) {
        People.find({}, function(err, peoples) {
            if(err) {
                console.log("didn't get people data");
                res.send('did not work');
            } else {
                console.log("got people data");
                res.json(peoples);
            }
        })
    },
    newName: function(req, res) {
        console.log("name from URL", req.params.name);
        People.create({name: req.params.name}, function(err, people) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong saving user');
                console.log(people.errors);
                res.send({errors: people.errors});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a fish!', people);
                res.send('added a people!'+people);
            }
        })
    },
    showName: function(req, res) {
        console.log("fish id-----"+"ObjectId('"+req.params.name+"')")
        // Fish.find({_id:"ObjectId('"+req.params.id+"')"}, function(err, fishies) {
        People.findOne({name: req.params.name}, function(err, people) {
            if(err) {
                console.log("didn't get people data");
                res.send('can not show person');
            } else {
                console.log("got fish data", people);
                res.json(people);
            }
        })
    },
    deleteName: function(req, res) {
        console.log("POST DATA-----", req.body);
        console.log("ID", req.params.name);
        People.remove({name: req.params.name}, function(err) {
            if(err) {
                console.log('something went wrong deleting a name');
                console.log(err.errors);
                res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a fish!');
                res.send('deleted '+req.params.name+' people!');
            }
        })
    }
}