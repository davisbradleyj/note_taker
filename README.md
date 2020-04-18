# Note Taker

## Description

This is an  application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the application
- jQuery - library supplement to JavaScript controlling application logic
- JSON - data interchange format for the storage and retreival of data
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- Heroku - host for deployed application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

The goal of this project was to develop the back-end programming for a note taking application and connect to the front-end.  To accomplish this, numerous routes would have to be written to access HTML files, JSON data, and API functions to GET, POST, and DELETE data (where applicable).

At the outset of the project I was falling back to some lessons learned in a pair programming, where we were used GET and POST extensively to build a restaurant reservation manager application.  At the time we had not considered developing a DELETE feature, however, for this project that was a requirement.

Class lectures aided with the development of the delete feature, which follows similar backend logic to the post feature.  There are some small differences, specifically related to how the request information is accessed to identify the exact note to be deleted from the application.  I have highlighed this specific section of code in the below Code Snippet.

<img src="https://github.com/davisbradleyj/note-taker/blob/master/note-taker-demo.gif">

### Code Snippet:

From Script
```
// write notes to json file
// read fs.readFile json first, fs.writefile next with JS file logic present to post new note after on-click event
app.post("/api/notes", function (req, res) {
    newNote = req.body
    // console.log(newNote) => should be the new note that was posted (works!)
    // need to add an id - edit, logic added to index.js to add a data="id" element to the rendered notes when added through DOM
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) throw err;
        notesData = JSON.parse(data)
        notesData.push(newNote)
        // must be a string, requires a callback so include the err function.
        fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(notesData),function (err, data) {
            if (err) throw err;
            res.send()
        });
        
    });
    
});
// delete notes from json file
// readFile and writeFile required similar to post, but this time the delete button logic in JS file will allow deletion with on-click event
app.delete("/api/notes/:id", function (req, res) {
    // console.log of res object => follow scope to grab id data
    // console.log(req.params.id)
    fs.readFile(path.join(__dirname, "./db/db.json"), function (err, data) {
        if (err) throw err;
        notesData = JSON.parse(data)
        // required to remove the specific id from the object array, and allow the values to shift over one place upon deletion
        notesData.splice(req.params.id,1)
        fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(notesData),function (err, data) {
            if (err) throw err;
            res.send();
        })
    })
})

```

## License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Corbin Brockbank, Cristina Terry, Dan Fellows, Ana Medrano

## Installation

To install necessary dependencies for this application, the following commands are required:

`npm init` - To create the package.json file.

`npm i express fs` - Adds node modules and populates the package-lock.json file.

## Tests

No tests were required for this application

## Questions

<img src="https://avatars2.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

If you have any questions about the repository, open an issue or contact [Brad Davis](https://api.github.com/users/davisbradleyj) directly at davis.bradleyj@gmail.com
