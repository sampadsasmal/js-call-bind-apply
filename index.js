// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj1 = {
  fname: 'sampad',
  lname: 'sasmal',
  getFullname: function (fname, lname) {
    console.log(`${this.fname} ${this.lname}`);
  },
};

const obj2 = {
  fname: 'rahul',
  lname: 'roy',
  getFullname: function () {
    console.log(`${fname} ${lname}`);
  },
};


let x = obj1.getFullname.mybind(obj2);
x();

Function.prototype.mybind = function(...args) {
  const obj = this;
  return function(){
    obj.call(...args)
  }
}


