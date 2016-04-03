 var EventViewModel = require("../../shared/view-models/event-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var dialogsModule = require("ui/dialogs");
var foodEvent = new EventViewModel();


exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = foodEvent;
};

exports.next = function() {
	
	frameModule.topmost().navigate("views/pollTargetAreaPage/pollTargetAreaPage");

};
