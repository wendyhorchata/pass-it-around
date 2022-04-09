// require package/ dependencies
const express = require('express');

// initilize the express application
const app = express();
const path = require('path')
// constant
const port = 3000;


// Define a router
app.get('/:number_of_bottles', (req, res) => {


    if (req.params.number_of_bottles >= 0) {
        res.send(`
    <html>
        <body>
            <h2>${req.params.number_of_bottles} Bottles of beer on the wall</h2>
            <a style=${req.params.number_of_bottles>0 ? 'display:block' : 'display:none'} href=${`http://localhost:3000/${req.params.number_of_bottles - 1}/98`}>take one down, pass it around</a>
        </body>
    </html>
`)
    } 


})

app.get('/:number_of_bottles/98/', (req, res) => {

    if (req.params.number_of_bottles >= 0) {
        res.send(`
    <html>
    <body>
        <h2>${req.params.number_of_bottles} Bottles of beer on the wall</h2>
        <a style=${req.params.number_of_bottles>0 ? 'display:block' : 'display:none'} href=${`http://localhost:3000/${req.params.number_of_bottles - 1}/98`}>take one down, pass it around</a>
        <a style=${req.params.number_of_bottles>0 ? 'display:none' : 'display:block'} href=${`http://localhost:3000/${req.params.number_of_bottles=99}`}>start over</a>
    </body>
</html>
    `)

    } 


})


// listen tp port
app.listen(port, () => {
    console.log('Express is listening on port', port)
})