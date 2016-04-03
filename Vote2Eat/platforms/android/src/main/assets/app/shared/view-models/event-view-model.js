var config = require("../../shared/config");
var fetchModule = require("fetch");
var Observable = require("data/observable").Observable;

function foodEvent(info) {
    info = info || {};

    // You can add properties to observables on creation
    var viewModel = new Observable({
        eventName: info.eventName || "",
        date: info.date || ""


    });


    // return fetchModule.fetch(config.apiUrl + "oauth/token";
    
	

    return viewModel;
}

// function handleErrors(response) {
    // if (!response.ok) {
        // console.log(JSON.stringify(response));
        // throw Error(response.statusText);
    // }
    // return response;
// }

module.exports = foodEvent;