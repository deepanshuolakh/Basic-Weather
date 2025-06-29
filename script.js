const apikey = "873c810d010ac0760d69344907af05e6"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
const weather=document.querySelector(".weather")

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(1) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="./images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./images/mist.png"
    }
}

searchbtn.addEventListener("click", () => {
    weather.style.display="block";
    checkweather(searchbox.value)
})
