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
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      var parsedNotes = JSON.parse(data);

      // receive a new note to save on the request body
      let newNote = req.body;
      // gives each new note a unique ID using uuid package
      newNote.id = uuidv4();

      parsedNotes.push(newNote);

      // add it to the `db.json` file, and then return the new note to the client.
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

      // receive a query parameter containing the id of a note to delete.
      const noteID = req.params.id;
      //removes the note with the ID you want to delete
      const newDb = parsedNotes.filter((note) => {
        return note.id !== noteID;
      });
      //rewrites the db.json file without the note that was deleted
      fs.writeFile("db/db.json", JSON.stringify(newDb), (err) => {
        if (err) throw err;
        console.log("The note has been deleted");
        res.json("Success!");
      });
    });
  });
};

