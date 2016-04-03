var Observable = require("data/observable").Observable;
var frameModule = require("ui/frame");

exports.loaded = function(args)
{
	var obj = new Observable();
	obj.set("tap", function(args){
		setTimeout(function(){
			obj.set("selected", args.object.id);
		}, 100);
	});
	
	args.object.bindingContext = obj;
}

exports.restaurantPreferencesSelection = function()
{
	var topmost = frameModule.topmost();
	topmost.navigate("views/pollFilterPage/pollFilterPage");
}