function getWeather() {
    var locationInput = document.getElementById("location-input");
    var weatherInfo = document.getElementById("weather-info");
  
    if (locationInput.value !== "") {
        // Replace with your API key
        var apiKey = "39459c934931e0c0a699a0a6296f86a6";
        var url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + encodeURIComponent(locationInput.value);
      
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                weatherInfo.innerText = "Error: " + data.error.info;
              } else {
                var location = data.location.name + ", " + data.location.country;
                var temperature = data.current.temperature + "°C";
                var humidity = "Humidity: " + data.current.humidity + "%";
                var condition = "Condition: " + (data.current.weather_descriptions[0] || 'N/A');
        
                weatherInfo.innerHTML = `
                  <p>Location: ${location}</p>
                  <p>Temperature: ${temperature}</p>
                  <p>${humidity}</p>
                  <p>${condition}</p>
                `;
              }
            })
        .catch(error => {
          weatherInfo.innerText = "Error: " + error.message;
        });
  
      locationInput.value = "";
    }
  }
  