// ===============================================================================
//  routes to data sources.
// ===============================================================================
const notesData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  //notes variable set up
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8")
  );
  //  /api/notes get request
  // handles the get request from the client, reads and sends the db.JOSN data of saved notes.

  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  // /api/nptes/:id get request
  // returns note with a specific id

  app.get("/api/notes/:id", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
    console.log("got notes");
  });

  // /api/notes post request
  // receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    // UUID package ID applied
    newNote.id = uuidv4();
    notes.push(newNote);
    updatedb();
    res.json(newNote);
  });

  // Delete Request: deletes a note with a specific id
  app.delete("/api/notes/:id", function (req, res) {
    notes.splice(req.params.id, 1);
    updatedb();
    console.log("Deleted note id " + req.params.id);
  });

  // updates the db.json whenever a note is added or deleted
  function updatedb() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
      if (err) throw err;
      return "notes updated";
    });
  }
};
