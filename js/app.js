

// DOM MANIPULATION STEP1: 

// **********WINDOW INTO THE DOM ***************
let cookieSection = document.getElementById('cookie-profiles')
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total']
console.dir(cookieSection);

//  OBJECT LITERALS

//  Seattle

let seattle = {
  city: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieBought: 6.3,
  // randomCustPerHour: [],
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  CookiesPerHour: [],

  randomCustPerHour: function(){
    // for (let i = 0; i < hours.length; i++){
    //   this.randomCustPerHour.push(random(this.minCustomer, this.maxCustomer))
    // }
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
  },

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCustomer, this.maxCustomer); // store a random # 23-65
    console.log(this.custPerHour);
  },


  getCookiesPerHour: function(){
    this.total = 0;
    // this.randomCustPerHour();
    for (let i = 0; i < hours.length; i++){
      this.getCustPerHour(); // this.custPerHour: 25
      let cookiePerHour = (Math.round(this.custPerHour * this.avgCookieBought));
      this.cookieSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;

        
      //   this.avgCookieBought * this.randomCustPerHour[i];
      // this.CookiesPerHour.push(simCookiePerHour);
    }
  },
   
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);
    }

    // let imgElem = document.createElement('img');
    // imgElem.src = this.photo;
    // imgElem.alt = `${this.city} sells ${this.avgCookieBought}`;
    // articleElem.appendChild(imgElem);

  }
}

seattle.randomCustPerHour();
console.log(seattle.randomCustPerHour());
seattle.render();
// console.log("article",seattle.render());
console.log(seattle);

// grabbed from MDN docs
// function randomavg(min,max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// Tokyo

let tokyo = {
  city: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieBought: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  randomCustPerHour: [],
  CookiesPerHour: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
  },
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);
    }
  }
}
tokyo.randomCustPerHour();
console.log(tokyo.randomCustPerHour());
tokyo.render();
console.log(tokyo);


//  Dubai

let dubai = {
  city: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieBought: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  randomCustPerHour: [],
  CookiesPerHour: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);
    }
  }
}
dubai.randomCustPerHour();
console.log(dubai.randomCustPerHour());
dubai.render();
console.log(dubai);



// Paris

let paris = {
  city: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieBought: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  randomCustPerHour: [],
  CookiesPerHour: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);
    }
  }
}
paris.randomCustPerHour();
console.log(paris.randomCustPerHour());
paris.render();
console.log(paris);



//  LIMA

let lima = {
  city: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieBought: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  randomCustPerHour: [],
  CookiesPerHour: [],

  randomCustPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer +1) + this.minCustomer);
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.city} sells ${this.randomCustPerHour()}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
      ulElem.appendChild(liElem);
    }
  }
}
lima.randomCustPerHour();
console.log(lima.randomCustPerHour());
lima.render();
console.log(lima);