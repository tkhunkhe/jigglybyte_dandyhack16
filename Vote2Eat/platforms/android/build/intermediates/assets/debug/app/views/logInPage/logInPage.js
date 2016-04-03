var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel({
	email: "definesugar@gmail.com",
	password: "helloworld"
});
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var email;
var dialogsModule = require("ui/dialogs");

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
	
	frameModule.topmost().navigate("views/list/list");
	
	
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

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};