var routes = require('./routes'),
	express = require('express');

var app = express();

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Iam a beautiful butterfly');
});

app.post('/api/v1/register', routes.register);

app.listen(8888);