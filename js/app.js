



// **********WINDOW INTO THE DOM ***************
let cookieSection = document.getElementById('cookie-profiles')

// console.dir(cookieSection);

//  OBJECT LITERALS

let seattle = {
  name: 'Seattle',
  minCus: '23',
  maxCus: '65',
  avg: '6.3',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total']
  getavg: function(){
    this.avg = `${randomavg(23,65)} cookies`;
  },
  // have the cooky render itself to the html - DOM MANIPULATION pt 2
  render: function(){
  // STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article');
  // STEP 3: OPTIONAL - GIVE IT CONTEXT
  // STEP 4; ADD IT TO THE HTML DOCUMENT
  // parent.appendChild(child to append);
    cookieSection.appendChild(articleElem);

  // create h2 element - post the kitten's name
    let h2Elem = document.createElement('h2');
  // context - location name
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.time.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.time[i];
      ulElem.appendChild(liElem);
    }
  }
};

seattle.getavg();
seattle.render();
console.log(seattle);

// grabbed from MDN docs
function randomavg(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}