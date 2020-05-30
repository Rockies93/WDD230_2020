//get info from doc
let highTemp = parseFloat(document.getElementById('tempHigh').innerHTML);
let lowTemp = 28;
var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML);
var temperature = (highTemp + lowTemp) / 2;

//formula for windchill, Display innerHTML
let speedFactor;
if (temperature <= 50 && windSpeed >= 3) {
    let speedFactor = 35.74 + 0.6215*temperature - 35.75*(windSpeed**0.16) + 0.4275*temperature*(windSpeed**0.16);
    let tempWind = speedFactor;
    document.getElementById('windChill').innerHTML = tempWind.toFixed(2);
}
else {
    document.getElementById('windChill').innerHTML = "N/A";
}




