// =======dependencies========
let express = require("express");
let path = require("path");
// ========set up the server========
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// index directory
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
// go to all tables and wait list
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));

//  get all tables reserved
app.get("/api/notes", function (req, res) {
    return res.json(placeholder);
})
// make reservations
app.post("/api/notes", function (req, res) {
    let placeholder= req.body
    if(logical argument){
        placeholder.push(placeholder);
        // create object
    }else{
        wait_list.push(placeholder);
    }
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.delete("/api/notes/:id", function (req, res) {
    return res.json(NOTES PLACEHOLDER);
})

// ======= server listener=========
app.listen(PORT, function(){
    console.log("getting started")
})