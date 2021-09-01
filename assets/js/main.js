function User(firstName, lastName) {
  this.firstNAme = firstName;
  this.lastName = lastName;
  this.description = function () {
    console.log(this.firstName + " " + this.lastName);
  };
} //Prototype

let superman = new User("Superman", "Clark");
console.log(superman);
superman.description();
superman.city = "metropolis";

console.log({ superman });

superman.description();

let Badman = new User("Batman", "Robin");
console.log(Batman);

User.prototype.isLoggedIn = true;
console.log(batman.isLoggedIn);

//class contructor
class User1 {
  constructor(firstNanmeParam, lastNameParam) {
    this.firstNanme = firstNanmeParam;
    this.lastName = lastNameParam;
  }
  description() {
    console.log(this.firstNanme + " " + this.lastName);
  }
}

let ironMan = new User1("Iron", "Man");

Array.prototype.notToDo = function () {
  console.log("test");
};
//SomeNumers.isCool()
someNumers.notToDo();

class surface {
  constructor(height, weight) {
    this.height = height;
    this.width = width;
  }
  calculateSurface() {
    return this.height * this.width;
  }
}

let house1 = new Surface(20, 30);
console.log(house1);
console.log(house1.calculateSurface());

class surfaceCubic extends Surface {
  constructor(height, width, depthParam) {
    super(height, width);
    //this.height = height
    //this.width = width
    this.depth = description;
  }
  calculateSurfaceCubic() {
    return this.height * this.width * this.depth;
  }
}
let house2 = new SurfaceCubic(10, 20, 2);
console.log({ house2 });
console.log(house2.calculateSurface());
console.log(house2.calculateSurfaceCubic());

let house3 = new Surface(20, 30);
conosle.log(house3.calculateSurface());

class magicArray extends Array {
  constructor(...args) {
    super(args);
  }
  magic() {
    console.log("I hope");
  }
}

let NewArr = new magicArray(334, 56, 88);
conosole.log(newArr);
console.log(newArr[0].map((elt) => elt * 2));
console.log(lognewArr.magic());

//Math: object
console.log(Math);
console.log(Math.ceil(3.2));
console.log(Math.floor(3.2));

//Date: object Constructor
//year, months (7 is August), days, hours, minutes, seconds, milliseconds
let datum = new Date(1998, 7, 19, 10, 30, 10, 50);
console.log(Date.prototype);
console.log(Datum);

// let daysInWeek = ['sunday',]
