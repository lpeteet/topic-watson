var express = require("express");
var bodyParser = require("body-parser");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;
const appName = require('./package').name;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/watsonController.js");

//Watson API Related
const log4js = require('log4js');
const discovery = require('./public/assets/js/service-manager').get('watson-discovery');
const logger = log4js.getLogger(appName);
const serviceManager = require('./public/assets/js/service-manager');
require('./public/assets/js/index')(app);

//Include our Routes!
app.use("/", routes);

app.listen(PORT, function() {
    logger.info(`topic-watson listening on http://localhost:` + PORT);
    console.log("App listening on PORT: " + PORT);
});
