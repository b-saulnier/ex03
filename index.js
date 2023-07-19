import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'
import ejs from 'ejs';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.render('hello', {text: "Hello world!"});
});

app.get('/myweather', async (req, res) => {

    [42.3584, -71.0598]
    const weatherJSON = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${ 42.3584 }&lon=${ -71.0598 }&appid=${process.env.WEATHER_API}`
    );
    console.log(weatherJSON);
    const weather = await weatherJSON.json();



    const city = "Boston";
    const temp = weather.main.temp;
    const feels_like = weather.main.feels_like;
    const description = weather.weather[0].description;
    const temp_max = weather.main.temp_max;
    const temp_min = weather.main.temp_min;
    const pressure = weather.main.pressure;
    const humidity = weather.main.humidity;

    console.log(weather.weather.description);
    console.log(description);

    console.log(weather);

    res.render('weather', {city: city, temp: temp, feels_like: feels_like, description: description, temp_max: temp_max, temp_min: temp_min, pressure: pressure, humidity: humidity});

});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });