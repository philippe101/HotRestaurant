var tableData = require ('table-data.js');
var waitingListData = require ('waitinglist-data.js');

module.exports = function (app) {

	app.get('api/tables', function (req, res){
		res.json(tableData);
	});

	app.get('api/waitinglis', function (req, res){
		res.json(waitingData);
	});
}