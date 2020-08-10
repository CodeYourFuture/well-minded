const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        authors: ["Ferhat", "Minko", "Roxana", "Ahmad", "Irving"]
    })
})


const Port = process.env.PORT || 5000;


app.listen(Port, () => {

    console.log("app working ....")
})