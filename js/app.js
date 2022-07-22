'use strict';

let storeTable = document.getElementById('store');

// function randomCustPerHour(min, max){
//   return Math.floor(Math.random() * (max - min +1) + min);
// }


let hours = 13;

let city = [];

function City(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale
  this.custPerHour = [];

  this.total = 0;

  this.getCustPerHour(this);
  city.push(this);
}

City.prototype.getCustPerHour = function(store){
  let tempArray = [];
  for(let i = 0; i < hours; i++){
    
    tempArray[i] = Math.round(Math.floor(Math.random() * (store.maxCust - store.minCust) + store.minCust) * store.avgCookieSale);
  }
  store.custPerHour = tempArray;
}
// fake.getCustPerHour();

City.prototype.getCookiesSoldPerHour = function(){
  this.getCookiesSoldPerHour;
}

let fake = new City('port', 23, 34, 3.5);
console.log(fake);


function cityTable(){
  let storeTable = document.getElementById('store');
  let storeCaption = document.createElement('caption');
  storeTable.appendChild(storeCaption);
  storeCaption.textContent = 'Cookie Sales';

  let hoursText = ['', '6am','7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
  let theadElem = document.createElement('thead');
  storeTable.appendChild(theadElem);

  let trElem = document.createElement('tr');
  theadElem.appendChild(trElem);
  for(let i = 0; i < hoursText.length; i++){
    let thElem = document.createElement('th');
    trElem.appendChild(thElem);
    thElem.textContent = hoursText[i];
  }

  let tbodyElem = document.createElement('tbody');
  storeTable.appendChild(tbodyElem);
  let tfootElem = document.createElement('tfoot');
  storeTable.appendChild(tfootElem);

}

cityTable();


City.prototype.buildSalesRow = function(){




// this adds a row to the table
// make a tr for the city
// make a td for the citys name and set the text content to be that citys name, and append it to that row
// make a loop that goes over the size of the citys data, custPerhour
// in loop, create a td, set the text content to the td to the custPerHour at position [i]
// appdend the td to the tr for the city
// after the loop is finished, append the tr to the table

}

  // let divElem = document.createElement('store');
  // storeDiv.appendChild(divElem);

  // let h1Elem = document.createElement('h1');
  // h1Elem.textContent = this.name;
  // divElem.appendChild(h1Elem);

  // let ulElem = document.createElement('ul');
  // divElem.appendChild(ulElem);

  // for (let i = 0; i < this.hours.length; i++){
  //   let liElem = document.createElement('li');
  // liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
  //   ulElem.appendChild(liElem);
  // }

  // let liElem = document.createElement('li');
  // liElem.textContent = `Total: ${this.total}`;
  // ulElem.appendChild(liElem);

  // let row1 = document.createElement('tr');
  // storeTable.appendChild(row1);

  // let th1Elem = document.createElement('th');
  // th1Elem.textContent = ;

// }



let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
console.log(city);

function renderCitys(){
  for(let i = 0; i < city.length; i++){
    let currentCity = city[i];
    currentCity.getCustPerHour();
    currentCity.render();
  }
}

renderCitys();

// seattle.getCustPerHour();
// seattle.render();
// tokyo.getCustPerHour();
// tokyo.render();
// dubai.getCustPerHour();
// dubai.render();
// paris.getCustPerHour();
// paris.render();
// lima.getCustPerHour();
// lima.render();


// getCookiesSoldPerHour: function(){
//   this.total = 0;

//   for(let i = 0; i <= this.hours.length; i++){
//     this.getCustPerHour();
//     let cookiePerHour = (Math.round(this.custPerHour * this.avgCookieSale));
//     this.cookiesSoldPerHour.push(cookiePerHour);
//     this.total += cookiePerHour;
//   }
// },




// let seattle = {
  // name: 'Seattle',
  // hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,

//   cookiesSoldPerHour: [],

//   getCustPerHour: function(){
  // this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  //   },
  
  // render: function(){
  //   let divElem = document.createElement('store');
  //   storeDiv.appendChild(divElem);
  
  //   let h1Elem = document.createElement('h1');
  //   h1Elem.textContent = this.name;
  //   divElem.appendChild(h1Elem);
  
  //   let ulElem = document.createElement('ul');
  //   divElem.appendChild(ulElem);
  
  //   for (let i = 0; i < this.hours.length; i++){
  //     let liElem = document.createElement('li');
  //   liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
  //     ulElem.appendChild(liElem);
  //   }
  
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `Total: ${this.total}`;
  //   ulElem.appendChild(liElem);
  // },
  
  
  // };
  
  // seattle.getCookiesSoldPerHour();
  // seattle.render();

// ************* Form Demo ************

  // function handleSubmit(event){
  //   event.preventDefault();

  //   let name = event.target.cityName.value;
  //   let photo = event.target.photo.value;

  //   let interests = event.target.interests.value;
  //   interest = interests.split(',');
    
  //   let newCity = new City(name, minCust, maxCust, avgCookieSale);

  //   newCity.getCookiesSoldPerHour();
  //   newCity.render();
  // }

  // *** Step 2: Attach Event Listener: type of event, and our callback function or event handler ***

  // myform.addEventListener('submit', handleSubmit);