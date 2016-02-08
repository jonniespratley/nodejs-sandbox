const http = require('http');
const PORT = process.env.PORT || 8000;

var Program = require('./src/program');
var instance = new Program();

instance.run(function (resp) {
    console.log('resp', resp)
});


http.createServer(instance.app).listen(PORT, function () {
    log('Express server started on port', PORT);
});
