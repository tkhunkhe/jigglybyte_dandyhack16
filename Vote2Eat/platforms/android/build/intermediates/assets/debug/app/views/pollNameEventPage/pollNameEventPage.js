var EventViewModel = require("../../shared/view-models/event-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var dialogsModule = require("ui/dialogs");
var foodEvent = new EventViewModel();

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = foodEvent;
};

exports.createEvent = function() {
	
	frameModule.topmost().navigate("views/pollSelectDatePage/pollSelectDatePage");
	
	
	
    // user.login()
        // .catch(function(error) {
            // console.log(error);
            // dialogsModule.alert({
                // message: "Unfortunately we could not find your account.",
                // okButtonText: "OK"
            // });
            // return Promise.reject();
        // })
        // .then(function() {
            // frameModule.topmost().navigate("views/list/list");
        // });
};
