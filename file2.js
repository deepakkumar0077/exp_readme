const http = require('http');
const fs = require('fs');
http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
fs.readFile('./index.html', null, function(error, data){
if(error){
console.error("Unable to read the file", error);
}
fs.writeFile('./second.html', data, (error) => {
if(error){
console.error('error writing file', error);
return;
}
else {
res.write(data);
res.end();
}
});
});
}).listen(8085);