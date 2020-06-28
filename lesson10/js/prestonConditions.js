const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=0367910c7e4bed370071326ed21ac397";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   //Hero Box 
    document.getElementById('conditions').textContent = jsObject.list[0].weather[0].main;
    document.getElementById('tempHigh').textContent = ((jsObject.list[0].main.temp_max - 273.15) * 1.8 + 32).toFixed(1);
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.list[0].wind.speed;

     
   //5 Day Forcast 
    for (let i = 0; i < 5; i++) {
    //Headings
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let numberDate = new Date();
        let dayIncrement = numberDate.getDay() + i;
        if (dayIncrement < 7) {
            var theDay = day[dayIncrement];
        } else {
            var theDay = day[dayIncrement-7];
        }
    
        var dayHeading = document.createElement('div');
        dayHeading.setAttribute('class', 'five-day-part')
        var h3 = document.createElement('h3');

        h3.textContent = theDay;

        document.querySelector('div.five-day').appendChild(dayHeading);
        dayHeading.appendChild(h3);
      
    //Icons
        let image = document.createElement('img');
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array

        image.setAttribute('src', imagesrc);
        image.setAttribute('alt', desc);

        dayHeading.appendChild(image);

    //Temp
        let temps = document.createElement('ul');
        let highTemp = document.createElement('ul')
       
        highTemp.textContent = ((jsObject.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + ' F';

        dayHeading.appendChild(temps);
        temps.appendChild(highTemp);
    }

  });