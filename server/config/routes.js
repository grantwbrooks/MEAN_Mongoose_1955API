var peoples = require('../controllers/peoples.js')

module.exports = function(app) {
    // Routes
    app.get('/', function(req, res) {
        peoples.showAll(req, res)
    })
    app.get('/new/:name/', function(req, res) {
        peoples.newName(req, res)
    })
    app.get('/remove/:name/', function(req, res) {
        peoples.deleteName(req, res)
    })
    app.get('/:name/', function(req, res) {
        peoples.showName(req, res)
    })
}

