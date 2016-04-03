var frameModule = require("ui/frame");

exports.getFriends = function()
{
	var topmost = frameModule.topmost();
	topmost.navigate("views/friendPage/friendPage");
};

exports.makePoll = function()
{
	var topmost = frameModule.topmost();
	topmost.navigate("views/pollNameEventPage/pollNameEventPage");
};

exports.viewPoll = function()
{
	var topmost = frameModule.topmost();
	topmost.navigate("views/viewPollPage/viewPollPage");
};

exports.goToSettings = function()
{
	var topmost = frameModule.topmost();
	topmost.navigate("views/settings/settings");
};