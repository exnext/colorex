const express = require('express')
const fs = require('fs');

const srv = express();

srv.use(express.static(__dirname + '/'));
srv.set('port', (process.env.PORT || 8080));
srv.listen(srv.get('port'), function () {
    console.log('Node app is running on port', srv.get('port'));
});