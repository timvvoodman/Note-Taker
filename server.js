// DEPENDENCIES

var express = require("express");

// Tells node that we are creating an "express" server

const app = express();

// Port Setup
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
//  points server to "route" files.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
// starts server and listens to port

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
