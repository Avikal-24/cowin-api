var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const path = require('path');

// this is now the default folder to give the response files
app.use(express.static('views'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
});

app.get('/:id', function (req, res) {
    let id = req.params.id;
    //   console.log(id) ;
    res.render("district", { state_id: id });
});

app.get('/:id/:district/:date/:month/:year', function (req, res) {
    let id = req.params.id ;
    let district= req.params.district ;
    let date= req.params.date ;
    let month= req.params.month ;
    let year= req.params.year ;
    //   console.log(district) 
    res.render("slots", { state_id: id , district_id: district, date:date, month:month , year:year });
});

app.listen(port, () => {
    console.log(`The example app is listening at http://localhost:${port}`)
})