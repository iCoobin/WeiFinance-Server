/**
 * Created by Kevin on 2017/5/18.
 */

var http = require('http');


http.createServer(function (req, res) {

    res.end('welcome to WeiFinance');

}).listen(8888);