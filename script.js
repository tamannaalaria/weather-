let lon;
let lat;
let temperatureDescription = document.querySelector(".description");
let temperatureDegree = document.querySelector(".degree");
let locationTimezone = document.querySelector(".location-timezone");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	const api = "6d055e39ee237af35ca066f35474e9df";

	const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperatureDegree.textContent =  Math.floor(data.main.temp - kelvin) + "°C";
		temperatureDescription.textContent = data.weather[0].description;
		locationTimezone.textContent = data.name + "," + data.sys.country;
		let icon1 = data.weather[0].icon;
		icon.innerHTML =`<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
		});
	});
}
});
