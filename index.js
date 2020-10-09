const express = require('express');
const hbs = require('express-handlebars');
const getWeather = require('./lib/getWeather')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
require('dotenv').config();

//path works with file paths and allows us to stitch two file paths together 


app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout',
}));
//building the engine
//creates a config 
app.set('view engine', '.hbs');
//using the engine
app.use(express.static(path.join(__dirname, 'public')));
//tells express to use something... the static part is saying, set folder to contain static content
//path.join sets path to the directory name 'public' 
//use is done to use the code 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.get('/', async (req, res) => {
//     let data = await getWeather();
//     // let location = data.weather[5].name
//     let desc = data.weather[0].description
//     console.log(data);
//     res.render('index', {submit: 'find out!', title: 'enter your location to find out!', desc});
// })

app.get('/', async (req, res) => {
    // let desc = data.weather[1].description
    let data = await getWeather();

    // let desc = data.weather[0].description
    // console.log(data.weather[0].description)
    console.log(data)
    res.render('index', {title: 'enter your location to find out more!'})
})


app.post('/', async (req, res) => {  

    // let desc =  data.weather.description
    // res.write('index', {name, desc})
    
    let data = await getWeather(req.body.cityInput, req.body.countryInput) 
    // let desc = data.weather[0].description
    res.render('index', {desc: data.weather[0].description, type: data.weather[0].main});
})


// submitData = (event) => {
//     app.post()
// };



app.listen(3000, () => {
    console.log('Server listening on port 3000');
    console.log(__dirname);
})