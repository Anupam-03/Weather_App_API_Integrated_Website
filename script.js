const options = {
    method: "GET",
    headers: {
    "X-RapidAPI-Key": "bff6801524msh5627a7b846ca361p17ac23jsnbc51f11bd615",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity2.innerHTML = response.humidity;
			max_temp.innerHTML = response.max_temp;
			min_temp.innerHTML = response.min_temp;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
			temp.innerHTML = response.temp;
			// temp2.innerHTML = response.temp;
			wind_degrees.innerHTML = response.wind_degrees;
			wind_speed.innerHTML = response.wind_speed;
			// wind_speed2.innerHTML = response.wind_speed;
			console.log(response);
		})
		.catch((err) => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Durgapur");

const setWeather = (city) => {
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct3.innerHTML = response.cloud_pct;
			feels_like3.innerHTML = response.feels_like;
			humidity3.innerHTML = response.humidity;
			max_temp3.innerHTML = response.max_temp;
			min_temp3.innerHTML = response.min_temp;
			sunrise3.innerHTML = response.sunrise;
			sunset3.innerHTML = response.sunset;
			temp3.innerHTML = response.temp;
			wind_degrees3.innerHTML = response.wind_degrees;
			wind_speed3.innerHTML = response.wind_speed;
			
			console.log(response);
		})
		.catch((err) => console.error(err));
}
setWeather("Delhi");

const setWeather2 = (city) => {
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct4.innerHTML = response.cloud_pct;
			feels_like4.innerHTML = response.feels_like;
			humidity4.innerHTML = response.humidity;
			max_temp4.innerHTML = response.max_temp;
			min_temp4.innerHTML = response.min_temp;
			sunrise4.innerHTML = response.sunrise;
			sunset4.innerHTML = response.sunset;
			temp4.innerHTML = response.temp;
			wind_degrees4.innerHTML = response.wind_degrees;
			wind_speed4.innerHTML = response.wind_speed;
			
			console.log(response);
		})
		.catch((err) => console.error(err));
}
setWeather2("Kolkata");

const setWeather3 = (city) => {
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct5.innerHTML = response.cloud_pct;
			feels_like5.innerHTML = response.feels_like;
			humidity5.innerHTML = response.humidity;
			max_temp5.innerHTML = response.max_temp;
			min_temp5.innerHTML = response.min_temp;
			sunrise5.innerHTML = response.sunrise;
			sunset5.innerHTML = response.sunset;
			temp5.innerHTML = response.temp;
			wind_degrees5.innerHTML = response.wind_degrees;
			wind_speed5.innerHTML = response.wind_speed;
			
			console.log(response);
		})
		.catch((err) => console.error(err));
}
setWeather3("Mumbai");

const setWeather4 = (city) => {
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct6.innerHTML = response.cloud_pct;
			feels_like6.innerHTML = response.feels_like;
			humidity6.innerHTML = response.humidity;
			max_temp6.innerHTML = response.max_temp;
			min_temp6.innerHTML = response.min_temp;
			sunrise6.innerHTML = response.sunrise;
			sunset6.innerHTML = response.sunset;
			temp6.innerHTML = response.temp;
			wind_degrees6.innerHTML = response.wind_degrees;
			wind_speed6.innerHTML = response.wind_speed;
			
			console.log(response);
		})
		.catch((err) => console.error(err));
}
setWeather4("Chennai");

const setWeather5 = (city) => {
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => response.json())
		.then((response) => {
			cloud_pct7.innerHTML = response.cloud_pct;
			feels_like7.innerHTML = response.feels_like;
			humidity7.innerHTML = response.humidity;
			max_temp7.innerHTML = response.max_temp;
			min_temp7.innerHTML = response.min_temp;
			sunrise7.innerHTML = response.sunrise;
			sunset7.innerHTML = response.sunset;
			temp7.innerHTML = response.temp;
			wind_degrees7.innerHTML = response.wind_degrees;
			wind_speed7.innerHTML = response.wind_speed;
			
			console.log(response);
		})
		.catch((err) => console.error(err));
}
setWeather5("Bangalore");