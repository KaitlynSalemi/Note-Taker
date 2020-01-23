// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

const router = require("express").Router();
const store = require("../db/store");
var fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

// router.get("/notes", function (req,  res){
//     res.send('get on /api/notes has been hit')
//     // console.log(store.readExistingNotes());
//     store
//     .readExistingNotes()
//     // .then(db => res.json(db));
// });

router.get("/notes", function (req,  res){
    readFileAsync("./db/db.json", "utf8")
    .then(function (data){
        // console.log(data);
        res.json(data)
        
    })
});

// router.post("/notes", function (req,  res){
//     store
//     .saveNewNote(req.body)
//     .then(res.json());
// });

router.post("/notes", function (req,  res){
   console.log(req.body);
    // writeFile
    // parse stringify 
   res.json("saved");
   
});

router.delete("/notes/:id", function (req,  res){
    store
    .deleteNote(req.params)
    .then(res.json());
});

module.exports = router;