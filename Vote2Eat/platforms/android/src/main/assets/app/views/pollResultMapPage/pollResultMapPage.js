var frameModule = require("ui/frame");

exports.next = function() {
	
	frameModule.topmost().navigate("views/pollResultListPage/pollResultListPage");

};