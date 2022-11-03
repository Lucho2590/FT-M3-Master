var fs = require("fs")
var http = require("http")

// Escribí acá tu servidor
http.createServer((req, res) => {


    fs.readFile(`./images${req.url}.jpg`, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Imagen not found')
        } else {
            res.writeHead(200, { 'Content-type': 'image' })
            res.end(data)
        }
    })


    fs.readFile(`${__dirname}/images/${req.url}.jpg`, ((err, data) => {
        if (err) {
            res.writeHead(404, { "Content-type": "text/plain" });
            res.end('Exploto');
        } else {
            res.writeHead(200, { "Content-type": "image/jpg" })
            res.end(data)
        }
    }))

    // if (req.url === '/arcoiris_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFileSync(`${__dirname}` + '/images/arcoiris_doge.jpg');
    //     res.end(imagen);
    // }
    // if (req.url === '/badboy_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFile(__dirname + '/images/badboy_doge.jpg');
    //     res.end(imagen);
    // }
    // if (req.url === '/code_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFile(__dirname + '/images/code_doge.jpg');
    //     res.end(imagen);
    // }
    // if (req.url === '/resaca_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFile(__dirname + '/images/resaca_doge.jpg');
    //     res.end(imagen);
    // }
    // if (req.url === '/retrato_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFile(__dirname + '/images/retrato_doge.jpg');
    //     res.end(imagen);
    // }
    // if (req.url === '/sexy_doge') {
    //     res.writeHead(200, { 'Content-Type': 'image/jpg' })
    //     var imagen = fs.readFile(__dirname + '/images/sexy_doge.jpg');
    //     res.end(imagen);
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' }); //Ponemos el status del response a 404: Not Found
    //     res.end('exploto'); //No devolvemos nada más que el estado.
    // }
}).listen(1337, '127.0.0.1');