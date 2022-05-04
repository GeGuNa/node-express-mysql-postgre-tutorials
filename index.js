var http = require('http');
const fs = require('fs');


http.createServer(function (request, response) {


fs.writeFileSync('qweq.txt', '124123c123c123c123', 'utf8')

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World! Node.js is working correctly   .\n');
   
   
   console.log(process.env.PWD);
   
}).listen(2984);


console.log('Server running at http://127.0.0.1:2984/');

//https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm

/*


var net = require('net');

var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});

*/
