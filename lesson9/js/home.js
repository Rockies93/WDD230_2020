const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  

const towns = jsonObject['towns'];
let images = ['nothing', '/lesson9/images/autumnTown.jpg', 'nothing', 'nothing', '/lesson9/images/riverTown.jpg','/lesson9/images/snow-town.jpg']
let altId = ['nothing', 'Autumnal Town', 'nothing', 'nothing', 'Town by River', 'Town and River covered in Snow']

for (let i = 0; i < towns.length; i++ ) {
    if (i==1||i==4||i==5) {
        let card = document.createElement('section');
        let textStuff = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let list = document.createElement('ul');
        let founding = document.createElement('li')
        let population = document.createElement('li');
        let rainFall = document.createElement('li');
        let image = document.createElement('img')

        
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        motto.setAttribute('class', 'townMotto')
        founding.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Current Population: ' + towns[i].currentPopulation;
        rainFall.textContent = 'Average Annual Rainfall: '  + towns[i].averageRainfall;
        image.setAttribute('src', images[i]);
        image.setAttribute('alt', altId[i]);
        image.setAttribute('class', 'home-image')
        textStuff.setAttribute('class', 'home-text')

        
        card.appendChild(image);
        card.appendChild(textStuff);
        textStuff.appendChild(h2);
        textStuff.appendChild(motto);
        textStuff.appendChild(list);
        list.appendChild(founding);
        list.appendChild(population);
        list.appendChild(rainFall);
        
        document.querySelector('div.home-cards').appendChild(card);
    }
}

});