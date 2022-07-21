'use strict';

let storeTable = document.getElementById('store');

function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}




let city = [];

function City(name, minCust, maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale
  this.custPerHour = [];
  this.hours = [];
  this.getCookiesSoldPerHour();
  this.total = 0;

  city.push(this);
}

City.prototype.getCustPerHour = function(){
  this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
}



City.prototype.getCookiesSoldPerHour = function(){
  this.getCookiesSoldPerHour;
}

City.prototype.render = function(){

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

  let row1 = document.createElement('tr');
  storeTable.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 

},

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);


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
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
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
  
// DOM MANIPULATION STEP1: 

// *************OBJECT LITERALS ******************


//  Seattle

let seattle = {
  name: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,

  cookiesSoldPerHour: [],
  
  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
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

seattle.getCookiesSoldPerHour();
seattle.render();

//  Tokyo

let tokyo = {
  name: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  
  cookiesSoldPerHour: [],

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for (let i = 0; i <= this.hours.length; i++){
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

tokyo.getCookiesSoldPerHour();
tokyo.render();


// //  Dubai

let dubai = {
  name: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
 
  cookiesSoldPerHour: [],



  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for (let i = 0; i <= this.hours.length; i++){
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
    divElem.appendChild(h1Elem)
    
    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);
    
    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    
    let liElem = document.createElement('li');
    liElem.textContent = `Total ${this.total}`;
    ulElem.appendChild(liElem);

  },


};
    
dubai.getCookiesSoldPerHour();
dubai.render();







// // Paris

let paris = {
  name: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  
  cookiesSoldPerHour: [],

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust)
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for (let i = 0; i <= this.hours.length; i++){
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

paris.getCookiesSoldPerHour();
paris.render();


// //  LIMA

let lima = {
  name: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  
  cookiesSoldPerHour: [],

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust)
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for (let i = 0; i <= this.hours.length; i++){
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

    let ulElem = document.createElement('ul');
    divElem.appendChild(ulElem);


//  Seattle




lima.getCookiesSoldPerHour();
lima.render();

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


// unique to each store - city, minCust, maxCust, avgCookie
// cookieArray = [], total = 0, custPerHour = 0
