// DEPENDENCIES
const path = require("path");

//HTML ROUTES
module.exports = function(app) {
    //route to notes.html
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // default route to index.html
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}