const API_KEY = "9dc27644395e1b8631cb949f7da6ceaf";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json().then(data => {
    const weather = document.querySelector("#weather .weather");
    const area = document.querySelector("#weather .area");
    area.innerText = data.name;
    weather.innerText = `${data.weather[0].main} /${data.main.temp}℃`;
  }));
}

function onGeoError(){
  console.log("Can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);