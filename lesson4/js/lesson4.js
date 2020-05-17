//Responsive Menu
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});

//Date at bottom
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthStuff = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let numberDate = new Date();
let theDay = day[numberDate.getDay()];
console.log(theDay);
let theDate = numberDate.getDate();
let theMonth = monthStuff[numberDate.getMonth()];
let theYear = numberDate.getFullYear();
document.getElementById('date').textContent = theDay + ", " + theDate +" " + theMonth + " " + theYear;