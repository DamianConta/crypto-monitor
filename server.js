const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const usersRoutes = require("./routes/users")
const coinsRoutes = require("./routes/coins")
const rootRoutes = require("./routes/root")
const {error404, errorHandler} = require('./middleware/errorHandler')

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', '.hbs');
app.use('/v1',usersRoutes);
app.use('/v1/coins',coinsRoutes);
app.use('/',rootRoutes)
app.use(errorHandler);

app.get('*',error404)
app.post('*',error404)

module.exports = {app} 













