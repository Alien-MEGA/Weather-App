const apiKey = "6f866255872aa4ed646f2363c9a42d0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');

searchBtn.addEventListener("click", () => {
	updateWeather(searchInput.value);
})

async function getWeather(cityName)
{
	const response = await fetch(apiUrl + `${cityName}` + `&appid=${apiKey}`);
	return response.json();
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
	}
	catch (error) {
		console.error('Error: ', error);
	}
}
