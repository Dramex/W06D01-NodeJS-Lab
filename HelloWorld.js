const http = require('http');

http.createServer((req, res) => {
    res.write('Hey! I can use Node!'); 
    res.end(); 
}).listen(3000); 