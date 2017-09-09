const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log('App is listening on port %s', port);
});

app.get('/', (req, res) => {
    res.send('top page');
});

app.get('/:room', (req, res) => {
    const roomName = req.params.room;
    res.render('room', { roomName: roomName });
});

app.get('/js/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(__dirname + '/' + fileName);
});