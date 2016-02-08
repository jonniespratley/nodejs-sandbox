const http = require('http');
const PORT = process.env.PORT || 5252;

var BlogPlugin = require('./src/plugins/blog-plugin');
var Program = require('./src/program');
var instance = new Program({
    debug: true
});

instance.use(BlogPlugin);


instance.app.listen(PORT, function () {
    console.log('Express server started on port', PORT);
});
