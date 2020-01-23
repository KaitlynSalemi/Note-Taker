// require npms
const path = require("path");
const router = require("express").Router()

// route to the notes page
router.get("/notes", function (req,  res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// route to the home page
router.get("*", function (req,  res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export the routes
module.exports = router;

