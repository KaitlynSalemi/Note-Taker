// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

const router = require("express").Router();
var fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// route to read the db.json file and parse it on the page
router.get("/notes", function (req,  res){
    readFileAsync("./db/db.json", "utf8")
    .then(function (data){
        res.json(JSON.parse(data))
    })
});

// route to update(override) the db.json file with a new note from the user
// and... assign an id to to each object in the array
router.post("/notes", function (req,  res){
    readFileAsync("./db/db.json", "utf8").then(function (data){
        const notes = JSON.parse(data);
        let note = req.body
        notes.push(note)
        for (let i = 0; i < notes.length; i++) {
            const noteOBJ = notes[i];
            noteOBJ.id = i;
        }
        const notesJSON = JSON.stringify(notes);
        writeFileAsync("./db/db.json", notesJSON).then(function(notes){
            console.log(notes);
        })
        res.json(notes);
    })
});

router.delete("/notes/:id", function (req,  res){
    //need to know the id
    //need to read the file
    //then find the index of said id
    // then remove said index of array
    //then write file
    
    deleteNote(req.params.id)
    res.json();
});

module.exports = router;