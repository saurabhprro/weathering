function searchWeather() {
           var location = document.getElementById('location').value;
           if (location === '') {
               alert('Please enter a location before searching.');
               return;
           }
        
           fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=6f7db34bb5ac3800fde1cb88cddae7e6')
               .then(response => response.json())
               .then(data => {
                   document.getElementById('location').textContent = data.name;
                   document.getElementById('temperature').textContent = data.main.temp;
                   document.getElementById('description').textContent = data.weather[0].description;
                   document.getElementById('wind-speed').textContent = data.wind.speed;
                   document.getElementById('humidity').textContent = data.main.humidity;
                   document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                   document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
               })
               .catch(error => console.error('Error:', error));
        }