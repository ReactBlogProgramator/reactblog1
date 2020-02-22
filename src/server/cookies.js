const express = require('express');
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


app.get('/test/:id', function (req, res) {

    var cookieVal = req.cookies.id === undefined ? 'brak' : req.cookies.id;

    res.cookie("id", req.params.id, {expires: new Date(Date.now() + 36000)})
        .send(`Poprzedni parametr: ${cookieVal}, bieżący parametr: ${req.params.id}`)

});

app.get('/',
    (req, res) => {
        if (req.session.page_views) {
            req.session.page_views++;
            res.send(`You visited this page ${req.session.page_views} times`);
        } else {
            req.session.page_views = 1;
            res.send("Welcome to this page for the first time!");
        }
    });

app.listen(3000)