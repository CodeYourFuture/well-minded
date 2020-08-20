const express = require('express');
const cors = require('cors');
var path = require('path');
const contact = require("./routes/contact.js")

const app = express();
app.use(cors());

app.use("api/contact", contact)

app.get('/authors', (req, res) => {
    res.json({
        authors: ["Ferhat", "Minko", "Roxana", "Ahmad", "Irving"]
    })
})

// if deployed, use react build as a code source.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const Port = process.env.PORT || 5000;


app.listen(Port, () => {

    process.env.PORT ?
        console.log("app working on  << " + process.env.ROOT_URL + "  >> listening on port  " + Port) //deployed
        :
        console.log("app working on  http://localhost:" + Port);  //locally

})