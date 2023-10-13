var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
if (req.url === '/style.css') {
// Serve the CSS file
fs.readFile('style.css', function (err, Data) {
if (err) {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('CSS file not found.');
} else {
res.writeHead(200, { 'Content-Type': 'text/css' });
res.write(Data);
res.end();
}
});
} else {
// Serve the HTML file
fs.readFile('experiment1.html', function (err, Data) {
if (err) {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('HTML file not found.');
} else {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(Data);
res.end();
}
});
}
}).listen(8080);