const apiKey = "6f866255872aa4ed646f2363c9a42d0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const weather_icon = document.querySelector('.weather-icon');

searchBtn.addEventListener("click", () => {
	updateWeather(searchInput.value);
})

async function getWeather(cityName)
{
	const response = await fetch(apiUrl + `${cityName}` + `&appid=${apiKey}`);
	return response.json();
}

function generate_icon(weather_stat)
{
	if (weather_stat == "Clouds")
		icon_src = "images/clouds.png";
	else if (weather_stat == "Clear")
		icon_src = "images/clear.png";
	else if (weather_stat == "Rain")
		icon_src = "images/rain.png";
	else if (weather_stat == "Drizzle")
		icon_src = "images/drizzle.png";
	else if (weather_stat == "Mist")
		icon_src = "images/mist.png";
	console.log("icon path is :", icon_src);
	return icon_src;
}

async function updateWeather(cityName)
{
	try
	{
		let data;
	
		data = await getWeather(cityName);
		document.querySelector(".city").innerHTML = cityName;
		document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp)}°C`;
		document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
		document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
		weather_icon.src = generate_icon(data.weather[0].main);
	}
	catch (error) {
		console.error('Error: ', error);
	}
}
