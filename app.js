var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs');
    
var db = mongoose.connect('mongodb://localhost/nodeAngularSeed');

// Bootstrap models
// require('./app/models/__files__');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 8080);
  app.set('showStackError', true);
  app.engine('.html', require('ejs').__express);
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'html');
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(app.router);
});

// Bootstrap routes
require('./config/routes')(app);

app.listen(app.get('port'));
console.log('Express app started on port ' + app.get('port'));