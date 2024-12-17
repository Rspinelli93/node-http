const http = require('node:http');
const nav = require('./data.js'); 


const server = http.createServer((req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Servidor Prueba</title>
    </head>
    <body>
        <h1>Elije videos graciosos que quieras ver</h1>
        <nav>
            ${nav.map(item => `<a href="${item.href}">${item.name}</a>`).join('')}
        </nav>
    </body>
    </html>
  `;
  res.end(html);
});

server.listen(0, () => {
  console.log(
    `Server listening on http://localhost:${server.address().port}`
  );
});