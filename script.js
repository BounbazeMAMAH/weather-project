const jsTempure = document.querySelector('.js-tempure');
const jsHumid = document.querySelector('.js-humid');
const jsWind = document.querySelector('.js-wind');
const jsButton = document.querySelector('.js-button');
const jsInput = document.querySelector('.js-input');
const jsCountry = document.querySelector('.js-country');
const jsWeaterIcon = document.querySelector('.js-weather-icon');
const jsWeather = document.querySelector('.js-weather');
const jsInvalid = document.querySelector('.invalid');

const apiKey = "4cf3403f61f5f869e4c667e89ba09efc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// api fuction
async function displayweater (country) {
  const response = await fetch(apiUrl + country + `&appid=${apiKey}`) ;
  // check if entrer value is correct it's come before change api response into JSON
  if(response.status == 404){
    jsInvalid.innerHTML = `<p >It's invalid try again</p>`
  };
  let data = await response.json();
  const whatweather = data.weather[0].main;
  
    jsTempure.innerHTML = data.main.temp + '°c';
  jsHumid.innerHTML = data.main.humidity + '%';
  jsWind.innerHTML = data.wind.speed + 'km/h';


  //loop for picture select in fonction of data.weather[0].main value
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

  // change de class
  jsWeather.classList.remove('weather');
  jsWeather.classList.add('weather-afterjs');
  
}

// valid name by clicking on button seach
jsButton.addEventListener('click', ()=>{
  displayweater (jsInput.value);
  const valueJsInput = jsInput.value
  jsCountry.innerHTML = valueJsInput.toUpperCase();
  jsInput.value = '';
})


//valid name by pressing ok on keyborg
function pressok (event){
  if(event.key === 'Enter'){
    displayweater (jsInput.value);
  const valueJsInput = jsInput.value
  jsCountry.innerHTML = valueJsInput.toUpperCase();
  jsInput.value = '';
  }
}
jsInput.addEventListener('keydown', pressok )

