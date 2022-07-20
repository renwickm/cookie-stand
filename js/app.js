'use strict';

let storeDiv = document.getElementById('store');

function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

// DOM MANIPULATION STEP1: 

// **********WINDOW INTO THE DOM ***************
// let cookieSection = document.getElementById('cookie-profiles')
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total']
// console.dir(cookieSection);

// unique to each store - city, minCust, maxCust, avgCookie
// cookieArray = [], total = 0, custPerHour = 0

// ***************CONSTRUCTOR REFRACTORS *************

// let City = [];

// function City (city, minCustomer, maxCustomer, avgCookieBought) {
//   this.city = city;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this. avgCookieBought = avgCookieBought;
//   this.total = 0;

//   city.push(this);
// }

// ************** PROTOTYPE METHODS **************

// City.prototype.getCookiesPerHour = function(){
//   this.CookiesPerHour = `${randomCustPerHour(23, 65)} cookies`;
// }
//  City.prototype.render = function() {
  
//  }

 // *************** CREATE CITIES WITH MY CONSTRUCTOR *****************

//  let seattle = new City('Seattle', 23, 65, 6.3);
//  let tokyo = new City('Tokyo', 3, 24, 1.2);
//  let dubai = new City('Dubai',11, 38, 3.7);

//  seattle.getCookiesPerHour();
//  seattle.render();
//  tokyo.getCookiesPerHour();
//  tokyo.render();
//  dubai.CookiesPerHour();

//  function renderCity(){
//   for(let i = 0; i < City.length; i++){
//     let currentCity = City[i];
//     currentCity.getCookiesPerHour();
//     currentCity.render();
//   }
//  }

// *********** TABLE DOM RENDERING *************

// let tableElem = document.createElement('table');
// articleElem.appendChild(tableElem);

// let row1 = document.createElement('tr');
// tableElem.appendChild(row1);

// let th1Elem = document.createElement('th');
// th1Elem.textContent = 'minCustomers';
// row1.appendChild(th1Elem);

// let th2Elem = document.createElement('th');
// th2Elem.textContent = 'maxCustomers';
// row1.appendChild(th2Elem);

// let th3Elem = document.createElement('th');
// th3Elem.textContent = 'avgCookieBought';
// row1.appendChild(th3Elem);


// *************OBJECT LITERALS ******************

//  Seattle



let seattle = {
  name: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,

  cookiesSoldPerHour: [],

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
    // console.log(this.custPerHour);
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      let cookiePerHour = (Math.round(this.custPerHour * this.avgCookieSale));
      this.cookiesSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;
    }
  },
   
  render: function(){
    let divElem = document.createElement('store');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
    divElem.appendChild(h1Elem);

    // let pElem = document.createElement('p');
    // pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    // articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(liElem);
  },

};

// seattle.getCustPerHour();
// console.log(seattle.getCustPerHour());
seattle.getCookiesSoldPerHour();
seattle.render();
// console.log("article",seattle.render());
// console.log(seattle);

// grabbed from MDN docs
// function randomavg(min,max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// Tokyo

// let tokyo = {
//   city: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieBought: 1.2,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
//   randomCustPerHour: [],
//   CookiesPerHour: [],

//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//     liElem.textContent = this.hours[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// }
// tokyo.randomCustPerHour();
// console.log(tokyo.randomCustPerHour());
// tokyo.render();
// console.log(tokyo);


// //  Dubai

// let dubai = {
//   city: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieBought: 3.7,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
//   randomCustPerHour: [],
//   CookiesPerHour: [],

//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//     liElem.textContent = this.hours[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// }
// dubai.randomCustPerHour();
// console.log(dubai.randomCustPerHour());
// dubai.render();
// console.log(dubai);



// // Paris

// let paris = {
//   city: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieBought: 2.3,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
//   randomCustPerHour: [],
//   CookiesPerHour: [],

//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//     liElem.textContent = this.hours[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// }
// paris.randomCustPerHour();
// console.log(paris.randomCustPerHour());
// paris.render();
// console.log(paris);



// //  LIMA

// let lima = {
//   city: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieBought: 4.6,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
//   randomCustPerHour: [],
//   CookiesPerHour: [],

//   randomCustPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//     liElem.textContent = this.hours[i];
//       ulElem.appendChild(liElem);
//     }
//   }
// }
// lima.randomCustPerHour();
// console.log(lima.randomCustPerHour());
// lima.render();
// console.log(lima);