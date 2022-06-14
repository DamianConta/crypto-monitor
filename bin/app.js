const server = require('../server')
const db = require('../services/usersDB')
const mongoose = require('mongoose') 

const port = process.env.PORT || 8080;

const URL_DATABASE =  process.env.MONGODB

  mongoose.connect(URL_DATABASE, function(err) {
    if(err) return console.log('Error en la conexión de base de datos: ' + err);
    console.log('Base de Datos Conectada');
      server.app.listen(port, function(err) {
          if(err) return console.log('Error en listen server:' + err);
          console.log('Server running on port ' + port);
      });
  });
  


