var portModel = require('../models/portmodel.js');

var portController = module.exports = {
	home: function(req, res) {
		res.render("index.jade", {
			title: "Magellan's Voyage"
		})
	},	
	portFinder: function(req, res) {
		res.render("index.jade", {
			port: portModel.getPort(req.params.name),
			nextPort: portModel.nextPort(req.params.name),
			getAllPorts: portModel.getAllPorts()
		})
	},
};