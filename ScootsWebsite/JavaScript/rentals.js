const requestURL = '/ScootsWebsite/rentals.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

//Scooter Rentals
    for(let i = 0; i<jsonObject.rentals.length; i++) {
        if (i<3) {

            let div = document.createElement('div');
            div.setAttribute('class','rental-card');

            let h4 = document.createElement('h4');
            h4.textContent = jsonObject.rentals[i].name;

            let image = document.createElement('img');
            image.setAttribute('src', '/ScootsWebsite/images/' + jsonObject.rentals[i].image);
            image.setAttribute('alt', jsonObject.rentals[i].name);

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            li1.textContent ='Half Day: $'+ jsonObject.rentals[i].halfdayres;
            let li2 = document.createElement('li');
            li2.textContent='Full Day: $' + jsonObject.rentals[i].wholedayres;
            let li3 = document.createElement('li');
            li3.textContent = 'Half Day- No reservation: $' +jsonObject.rentals[i].halfdaywalk;
            let li4 = document.createElement('li');
            li4.textContent = 'Full Day- No reservation: $' + jsonObject.rentals[i].wholedaywalk;

            let link = document.createElement('a');
            link.setAttribute('href', '/ScootsWebsite/reservations.html');
            let button = document.createElement('button');
            button.textContent = 'Make Reservation';

            document.querySelector('div.scooters').appendChild(div);
            div.appendChild(h4);
            div.appendChild(image);
            div.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            div.appendChild(link);
            link.appendChild(button);
        } 
        else if ( i< 4){
            let div = document.createElement('div');
            div.setAttribute('class','rental-card');

            let h4 = document.createElement('h4');
            h4.textContent = jsonObject.rentals[i].name;

            let image = document.createElement('img');
            image.setAttribute('src', '/ScootsWebsite/images/' + jsonObject.rentals[i].image);
            image.setAttribute('alt', jsonObject.rentals[i].name);

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            li1.textContent ='Half Day: $'+ jsonObject.rentals[i].halfdayres;
            let li2 = document.createElement('li');
            li2.textContent='Full Day: $' + jsonObject.rentals[i].wholedayres;
            let li3 = document.createElement('li');
            li3.textContent = 'Half Day- No reservation: $' +jsonObject.rentals[i].halfdaywalk;
            let li4 = document.createElement('li');
            li4.textContent = 'Full Day- No reservation: $' + jsonObject.rentals[i].wholedaywalk;

            let link = document.createElement('a');
            link.setAttribute('href', '/ScootsWebsite/reservations.html');
            let button = document.createElement('button');
            button.textContent = 'Make Reservation';

            document.querySelector('div.atvs').appendChild(div);
            div.appendChild(h4);
            div.appendChild(image);
            div.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            div.appendChild(link);
            link.appendChild(button);
        }
        else {
            let div = document.createElement('div');
            div.setAttribute('class','rental-card');

            let h4 = document.createElement('h4');
            h4.textContent = jsonObject.rentals[i].name;

            let image = document.createElement('img');
            image.setAttribute('src', '/ScootsWebsite/images/' + jsonObject.rentals[i].image);
            image.setAttribute('alt', jsonObject.rentals[i].name);

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            li1.textContent ='Half Day: $'+ jsonObject.rentals[i].halfdayres;
            let li2 = document.createElement('li');
            li2.textContent='Full Day: $' + jsonObject.rentals[i].wholedayres;
            let li3 = document.createElement('li');
            li3.textContent = 'Half Day- No reservation: $' +jsonObject.rentals[i].halfdaywalk;
            let li4 = document.createElement('li');
            li4.textContent = 'Full Day- No reservation: $' + jsonObject.rentals[i].wholedaywalk;

            let link = document.createElement('a');
            link.setAttribute('href', '/ScootsWebsite/reservations.html');
            let button = document.createElement('button');
            button.textContent = 'Make Reservation';

            document.querySelector('div.jeeps').appendChild(div);
            div.appendChild(h4);
            div.appendChild(image);
            div.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            div.appendChild(link);
            link.appendChild(button);
        }
    }
  });