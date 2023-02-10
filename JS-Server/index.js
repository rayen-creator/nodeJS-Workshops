const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Voici un paragraphe <strong>HTML</strong> ! </p>');
});
server.listen(8080, () => {
    console.log('server work ! : http://localhost:8080');

});