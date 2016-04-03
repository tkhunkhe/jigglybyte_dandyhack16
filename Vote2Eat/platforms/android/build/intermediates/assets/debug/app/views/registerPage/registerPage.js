var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = user;
};

function completeRegistration() {
<<<<<<< HEAD
    user.register()
        .then(function() {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function() {
                    frameModule.topmost().navigate("views/login/login");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
=======
          
    frameModule.topmost().navigate("views/logInPage/logInPage");
	
    // user.register()
        // .then(function() {
            // dialogsModule
                // .alert("Your account was successfully created.")
                // .then(function() {
                    // frameModule.topmost().navigate("views/login/login");
                // });
        // }).catch(function(error) {
            // console.log(error);
            // dialogsModule
                // .alert({
                    // message: "Unfortunately we were unable to create your account.",
                    // okButtonText: "OK"
                // });
        // });
>>>>>>> 037195de33bc491fca31b65b486b8238b22728d4
}

exports.register = function() {
    completeRegistration();
};