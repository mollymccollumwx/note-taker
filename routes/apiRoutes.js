// DEPENDENCIES
const fs = require('fs');
const path = require("path");

var notes = require("../db/db.json");


//need api routes to get, post, and delete
//data is coming from db.json -- parse JSON?
//db.json is an array of objects

//read existing file
//covert to JS
//push into array
//then writeToFile

module.export = function(app) {
//api route "get" will get data from the db.json file
app.get("/api/notes", function(req, res) {
    res.json(notes);
});
//api route "post" will put data into the db.json file
app.post("/api/notes", function(res, req){

});
}


//api route "delete" will delete data from the db.json file based on ID number?

