const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The results of the calculation is!" + results);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})