var app = require( "application" );
var contacts = require( "nativescript-contacts" );
var model = require("../../shared/view-models/contacts-view-model");


var newContact = new contacts.Contact();

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = model;    
}

exports.addContact = function(args) {



}


exports.getContact = function(args){
    contacts.getContact().then(function(args){        

            // contacts.getContact() returns an object containing the contacts data
            var contact = args.data;        
            // lets assign the first and last name to the contact_name property
            model.contact_name = contact.name.given + " " + contact.name.family;    
            // lets check to make sure we have a phone number before assigning it to the 
            // property in our model        
            if(contact.phoneNumbers.length > 0){
                // we just want the first phone number in this case
                model.phone = contact.phoneNumbers[0]
            }
            
        });
}
