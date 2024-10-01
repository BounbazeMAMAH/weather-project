const jsTempure = document.querySelector('.js-tempure');
const jsHumid = document.querySelector('.js-humid');
const jsWind = document.querySelector('.js-wind');
const jsButton = document.querySelector('.js-button');
const jsInput = document.querySelector('.js-input');
const jsCountry = document.querySelector('.js-country');
const jsWeaterIcon = document.querySelector('.js-weather-icon')

const apiKey = "4cf3403f61f5f869e4c667e89ba09efc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function displayweater (country) {
  const response = await fetch(apiUrl + country + `&appid=${apiKey}`) ;
  let data = await response.json();
  const whatweather = data.weather[0].main

  jsTempure.innerHTML = data.main.temp + '°c';
  jsHumid.innerHTML = data.main.humidity + '%';
  jsWind.innerHTML = data.wind.speed + 'km/h';

  switch(whatweather) {
    case 'Clear':
        jsWeaterIcon.src = "images/clear.png"
        break;
    case 'Clouds':
        jsWeaterIcon.src = "images/clouds.png"
        break;
    case 'Drizzle':
        jsWeaterIcon.src = "images/drizzle.png";
        break;
     case 'Mist':
        jsWeaterIcon.src = "images/mist.png";
        break;
    case 'Rain':
        jsWeaterIcon.src = "images/rain.png";
        break;
    case 'Snow':
        jsWeaterIcon.src = "images/snow.png"
        break;
  }

  console.log(data);
 
  
}

jsButton.addEventListener('click', ()=>{
  displayweater (jsInput.value);
  const valueJsInput = jsInput.value
  jsCountry.innerHTML = valueJsInput.toUpperCase();
  jsInput.value = '';
})

