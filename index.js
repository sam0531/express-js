const express = require('express');
const app = express();
const port = 7005;



app.get('/', (req, res) => {             // it will connect to Homepage
    res.send(`<h1>Page 1</h1>`);   
    res.end();
})
app.get('/p2', (req, res) => {               /// /p2 is for page 2
    res.send(`<h1>Page 2</h1>`);       
    res.end();
})
app.get('/p3', (req, res) => {
    res.send(`<h1>Page 3</h1>`);    
    res.end();
})
app.get('/p4',  (req, res) => {    
    res.send(`<h1>Page 4</h1>`);
    res.end();
})
app.get('/p5', (req, res) => {
    res.send(`<h1>Page 5</h1>`);
    res.end();
})

app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
});