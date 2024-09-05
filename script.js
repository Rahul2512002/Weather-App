document.getElementById('searchButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    }
});

async function fetchWeather(location) {
    const apiKey = 'b5c7c518203606445ff1d07ddb7244c0'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = `City: ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
