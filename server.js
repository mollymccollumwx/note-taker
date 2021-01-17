//require Express
const express = require("express");
//require node.js path module 
const path = require("path");
//require node.js file system
const fs = require("fs");

//create an instance of Express
const app = express();

//allows Heroku to choose a PORT or uses local host 3000
const PORT = process.env.PORT || 3000;

//sets up path for public folder
const PUBLIC_DIR = path.resolve(__dirname, "public");

// MIDDLEWARE: Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//add routes



//listen on the PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT: ` + PORT);
  });

