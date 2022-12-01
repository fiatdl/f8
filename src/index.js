const express = require("express");
const morgan = require("morgan");
const path=require("path");
const engine =require("express-handlebars");
const app = express();
const port = 3000;
app.use(morgan('combined'));

app.engine('hbs', engine.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/view'));
app.get('/', (req, res) =>
  res.render('home'));
app.listen(port, () => console.log(`your app listening on port :${port}`));