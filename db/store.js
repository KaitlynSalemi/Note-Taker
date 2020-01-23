var fs = require("fs");
const util = require("util");
// const db = require("./db.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const store = {
    readExistingNotes: function() {
        readFileAsync("./db.json", "utf8").then(function(db){
            console.log(db);
            
            // return db
        })
    },
    saveNewNote: function(newNote) {
        db.push(newNote);
        return newNote;
    },
    deleteNote: function(oldNote) {
        readFileAsync("db.json", "utf8").then(function(){
            // remove oldNote
            writeFileAsync("db.json", db).then(function() {
                console.log("Successfully wrote to db.json file");
              });
        })
    }
    // getNotes: function() {
    //     return db
    // },
    // saveNote: function(newNote) {
    //     db.push(newNote);
    //     return newNote;
    // },
    // deleteNote: function(){

    // }
};

module.exports = store;