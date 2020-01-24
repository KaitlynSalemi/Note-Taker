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
            // console.log(notesJSON);
        })
        res.json(notes);
    })
});

// route to remove the note that is deleted by the user
router.delete("/notes/:id", function (req,  res){
    readFileAsync("./db/db.json", "utf8").then(function (data){
        const notes = JSON.parse(data);
        // console.log(notes);

        let noteID = parseInt(req.params.id);
        // console.log(noteID);
        
        let newData = notes.filter(note =>note !== notes[noteID])
        // console.log(newData)

        const notesJSON = JSON.stringify(newData);
        writeFileAsync("./db/db.json", notesJSON).then(function(notes){
            // console.log(notesJSON);
        })
        res.json(notes);
    })
});

module.exports = router;