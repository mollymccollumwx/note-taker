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

// // * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing 
// the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
// and then rewrite the notes to the `db.json` file.



module.exports = function(app) {
//api route "get" will get data from the db.json file
app.get("/api/notes", function(req, res) {
    res.json(notes);
});
//api route "post" will put data into the db.json file
app.post("/api/notes", function(res, req){

});
}


//api route "delete" will delete data from the db.json file based on ID number?

