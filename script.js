
/*
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

    api ====>   1ae5793911abe46cd8c14fd8bdd4b4d0

*/

let API_KEY="1ae5793911abe46cd8c14fd8bdd4b4d0";

getWeatherData=(city)=>{
    const URL='https://api.openweathermap.org/data/2.5/weather';
    const Full_url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise=fetch(Full_url);
    console.log(city)

    return weatherPromise.then((response)=>{
        return response.json()
    })
}

function searchCity(){
    const city=document.getElementById('city-input').value;
    
    getWeatherData(city)
    .then((response)=>{
       // console.log(response)
        showWeatherData(response)
    })
    .catch((err)=>{
        console.log(err)
    })

}

showWeatherData=(weatherData)=>{
    document.getElementById('city-name').innerText=weatherData.name;
    document.getElementById('weather-type').innerText=weatherData.weather[0].main;
    document.getElementById('temp').innerText=weatherData.main.temp;
    document.getElementById('min-temp').innerText=weatherData.main.temp_min;
    document.getElementById('max-temp').innerText=weatherData.main.temp_max;
}