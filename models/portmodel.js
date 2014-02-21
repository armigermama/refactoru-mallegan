var portDescription

var Port = function(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
};

var ports = [
	new Port(0,'Seville', 'Situated on the banks of the Guadalquivir River, Seville has a rich Moorish heritage, and used to be a prosperous port that carried out trade with the Americas. In 1519, Ferdinand Magellan departed from Seville for the first circumnavigation of the Earth.'),
	new Port(1,'Canary Islands', 'Magellan sailed across the Atlantic Ocean to the Canary Islands, where they decided to set sail for Brazil. sThe Canary Islands offer sandy beaches, warm, clear water, and a pleasant climate year-round, making the area a popular tourist destination. '),
	new Port(2, 'Cape Verde', 'After a brief stop at the Canary Islands, Magellan arrived at the Cape Verde Islands, where they set course for Cape St. Augustine in Brazil. On November 20, the equator was crossed; on December 6, the crew sighted Brazil.'),
	new Port(3, 'Strait of Magellan', 'Strait of Magellan channel linking the Atlantic and Pacific oceans, between the mainland tip of South America and Tierra del Fuego island. Although the strait follows a somewhat tortuous course among numerous islands and channels and has a cold, foggy climate, it was an important sailing-ship route before the building of the Panama Canal (completed in 1914) shortened the Atlantic-Pacific passage by several thousand miles.'),
	new Port(4,'Guam', 'The first known contact between Guam and the West occurred when Ferdinand Magellan anchored his small 3-ship fleet in Umatac Bay on March 6, 1521. Hungry and weakened from their long voyage, the crew hastily Umatic Bay, Site of Magellan\'s Landing in 1521prepared to go ashore and restore provisions. However, the excited native Chamorro\'s, who did not share the Spaniards concept of ownership, canoed out first and began helping themselves to everything that was not nailed down. The weakened sailors had trouble fending off the tall and robust natives until a few shots from the Trinidad\'s big guns frightened them off the ship and they retreated into the surrounding jungle. Magellan was eventually able to obtain rations and offered iron, a commodity highly prized by Neolithic peoples, in exchange for fresh fruits, vegetables and water.'),
	new Port(5,'Philippines', 'After traveling three-quarters of the way around the globe, Portuguese navigator Ferdinand Magellan is killed during a tribal skirmish on Mactan Island in the Philippines. Earlier in the month, his ships had dropped anchor at the Philippine island of Cebu, and Magellan met with the local chief, who after converting to Christianity persuaded the Europeans to assist him in conquering a rival tribe on the neighboring island of Mactan. In the subsequent fighting, Magellan was hit by a poisoned arrow and left to die by his retreating comrades.')
];

var portModel = module.exports = {
	getAllPorts: function() {
		return (ports.slice());
	},
	getPort: function(name) {
		var matchingPorts = ports.filter(function(p) {
			return p.name === name;
		});
	return matchingPorts[0];
	},
	nextPort: function(name) {
		var matchingPorts = ports.filter(function(p) {
			return p.name === name;
		});
		var nextPortID = (matchingPorts[0].id + 1);
		return nextPort = ports[nextPortID]
	}
};