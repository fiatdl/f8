const express = require("express");
const morgan = require("morgan");
const path = require("path");
const engine = require("express-handlebars");
const db = require("./config/db");
const Route = require("./routes/index");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
``
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

db.connect();
app.engine("hbs", engine.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/view"));
Route(app);
app.listen(port, () => console.log(`your app listening on port :${port}`));
