var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
function showWeather() {
    // Scroll to the weather information container with a smooth animation
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });

    // Your existing code to fetch and display weather data can go here
    const card = document.getElementById('weatherCard');
    card.style.height = 'auto';
}

function hideWeather() {
    const card = document.getElementById('weatherCard');
    card.style.height = '0';
}
