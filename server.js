//DEPENDENCIES 
//require Express
const express = require("express");

//create an instance of Express
const app = express();

//allows Heroku to choose a PORT or uses local host 3000
const PORT = process.env.PORT || 3000;

// MIDDLEWARE: Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//require routes file
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listen on the PORT
app.listen(PORT, function() {
    console.log(`App listening on PORT: ` + PORT);
  });

