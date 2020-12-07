// ===============================================================================
// LOAD DATA
// Link our routes to data sources.
// ===============================================================================

var notesData = require("../db/db");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    db.push(req.body);
    res.json(db);
  });

  //app.delete???
};
