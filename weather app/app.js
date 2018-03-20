// Init Sotrage

const storage = new Storage;

// get stored location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

// Change loation event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // change location
  weather.changeLocation(city,state)

  // set local storage location
  storage.setLocationData(city,state)

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
})

// Getting the weather
function getWeather(){
  weather.getWeather()
    .then((results)=>{
      ui.paint(results)
    })
    .catch((err) => console.log(err))
}
