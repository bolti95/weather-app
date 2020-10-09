// const fetch = require('node-fetch');
// const express = require('express');
// const hbs = require('express-handlebars');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');



// const getUserWeather = () => {
//     let cityID = bodyParser.inputCity;
//     let key = '{1edb943da9f50fd49eac3fff08fe9136}';
//     fetch(`https://api.openweathermap.org/data/2.5/weather?` + cityID + `&appid=` + key)
//     let url = `https://api.openweathermap.org/data/2.5/weather?` + cityID + `&appid=` + key;
//     let data = await fetch(url);
//     let jsonData = await data.json();
//     console.log(jsonData);
//     console.log(cityID);
//     console.log(data);
//     return jsonData;
//     }
       
//     getUserWeather()
    

// module.exports = getUserWeather;