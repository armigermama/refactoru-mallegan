var portModel = require('../models/portmodel.js');

var portController = module.exports = {
	home: function(req, res) {
		res.render("index.jade", {
			title: "Magellan's Voyage",
			firstPort: portModel.getPort('Seville'),
			getAllPorts: portModel.getAllPorts()
		})
	},	
	portFinder: function(req, res) {
		res.render("port.jade", {
			port: portModel.getPort(req.params.name),
			nextPort: portModel.nextPort(req.params.name),
			getAllPorts: portModel.getAllPorts()
		})
	},
};