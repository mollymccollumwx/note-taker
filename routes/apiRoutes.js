// DEPENDENCIES
const fs = require("fs");
const path = require("path");
// package to create random ids
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
  //api route "get" will get data from the db.json file and return all as JSON
  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  // api route "post" will put data into the db.json file
  app.post("/api/notes", (req, res) => {
    console.log(req);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      var parsedNotes = JSON.parse(data);

      let newNote = req.body;
      newNote.id = uuidv4();

      parsedNotes.push(newNote);

      fs.writeFile("db/db.json", JSON.stringify(parsedNotes), (err) => {
        if (err) throw err;
        console.log("The new note has been saved");
        res.json(newNote);
      });
    });
  });

  //api route to delete notes from db.json file
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      var parsedNotes = JSON.parse(data);

      const noteID = req.params.id;
      const newDb = parsedNotes.filter((note) => {
        return note.id !== noteID;
      });

      fs.writeFile("db/db.json", JSON.stringify(newDb), (err) => {
        if (err) throw err;
        console.log("The note has been deleted");
        res.json("Success!");
      });
    });
  });
};
// // * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body,
// add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing
// the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved.
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
// and then rewrite the notes to the `db.json` file.
