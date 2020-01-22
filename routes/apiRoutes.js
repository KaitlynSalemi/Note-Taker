// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

const router = require("express").Router();
const store = require("../db/store");

router.get("/api/notes", function (req,  res){
    store
    // read db.json
    .getNotes()
    // return all saved notes as json
    .then(notes => res.json(notes));
});

router.post("/api/notes", function (req,  res){
    store
    // recieve new note to save on request body
    .saveNote(req.body)
    // add to db.json
    // return new note to the client
    .then(note => res.json(note));
});

router.delete("/api/:id", function (req,  res){
    store
    // recieve id of the note to delete
    // read db.json
    // remove note
    .deleteNote()
    // rewrite the notes to db.json
});

module.exports = router;