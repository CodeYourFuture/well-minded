const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/authors', (req, res) => {
    res.json({
        authors: ["Ferhat", "Minko", "Roxana", "Ahmad", "Irving"]
    })
})


const Port = process.env.PORT || 5000;


app.listen(Port, () => {

    process.env.PORT ?
        console.log("app working on  << " + process.env.ROOT_URL + "  >> listening on port  " + Port) //deployed
        :
        console.log("app working on  http://localhost:" + Port);  //locally

})