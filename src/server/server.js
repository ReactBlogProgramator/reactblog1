const express = require('express')
const app = express()
const port = 3000

app.get('/',
    (req, res) => res.send('Hello World!')
)

app.get('/test/:id/:id2/',
    (req, res) => {
        console.log('test');
        console.log(req.params.id);
        console.log(req.params.id2);
        //         //console.log(res);
        res.send(`Testowa podstrona z parametrem o wartości: ${req.params.id}  `+ req.params.id2)
    }
)

app.get('*',
    (req, res) =>
        res.send('Brak wskazanego adresu!')
)

app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))


