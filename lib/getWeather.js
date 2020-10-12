const fetch = require('node-fetch');
// bringing in node-fetch as a module import


const getWeather = async (city, country) => {
    console.log(city, country)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPEN_WEATHER_API}`; 
    let data = await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    console.log(jsonData.weather)
    // console.log('hello')
    return jsonData;
  
    }
    
    module.exports = getWeather;

    // Tell node we want to return the function 