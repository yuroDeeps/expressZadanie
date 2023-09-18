const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona działa!");
    res.render('index', {
        pageTitle: 'Strona główna'
    });
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {
        pageTitle: 'Strona o mnie'
    });
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        pageTitle: 'Strona kontakt'
    });
});

app.listen(5000, () => {
    console.log("serwer działa!");
});