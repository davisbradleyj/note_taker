// =======dependencies========
let express = require("express");
let path = require("path");
let fs = require("fs")
// ========set up the server========
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// =======declare variables=======
var notesData;
var newNote;
// index directory
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
// go to notes directory
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

//  get all notes
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) {
            console.log(err)
        }
        notesData = JSON.parse(data)
        res.json(notesData)
    })
});
// write notes to json file
// read json first, fs read/write file logic to be added
app.post("/api/notes", function (req, res) {
    newNote = req.body
    console.log(newNote) //should be the new note that was posted
    notesData = fs.readFileSync("./db/db.json", "utf8")
    notesData.push(newNote)
    console.log(notesData)// should hold array of notes
    res.writeFile(path.join(__dirname, "./db/db.json", notesData));
});
// app.delete("/api/notes/:id", function (req, res) {
//     return res.json(NOTES PLACEHOLDER);
// })

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// ======= server listener=========
app.listen(PORT, function () {
    console.log("getting started")
})