console.log(typeof Reflect);
// NOTE: format for using API //Reflect.construct(target, argumentsList[, newTarget])

// class Restaurant {
//   constructor(name, city) {
//     console.log(`${name} in ${city}`);
//   }
// }
//
// let r = Reflect.construct(Restaurant, ["Joy's", "Toronto"]);

// class Restaurant {
//   constructor() {
//     console.log(`${new.target}`)//logging out error - saying invalid syntax
//   }
// };
// function restaurantMaker() {
//   console.log(`in restaurantMaker`);
// }
//
// let r = Reflect.construct(Restaurant, ["Mark's Grub", "Nimrod"], restaurantMaker);
// let p = new Restaurant;
// console.log(p);

// NOTE: using apply method// Reflect.apply(target, thisArgument, argumentsList)
// class Palace {
//   constructor() {
//     this.id = 33;
//   }
//   show(){
//     console.log(this.id);
//   }
// }
//
// console.log(Palace);
// Reflect.apply(Palace.prototype.show, {id: 99});

// NOTE: Proxy section
//Proxy as an object
function Employee () {
  this.name = 'Milton Waddams';
  this.salary = 0;
}
var e = new Employee();

var p = new Proxy(e, {
  get: function (target, prop, receiver) {
    if (prop ==='salary')
      return 'Denied';
    return Reflect.get(target, prop, receiver);
  }
});

console.log(p.salary);
console.log(p.name);

//Proxy as a function
function getId() {
  return 55;
}

var g = new Proxy(getId, {
  apply: function(target, thisArg, argumentsList){
    return Reflect.apply(target, thisArg, argumentsList);
  }
});

console.log(g());

//Proxy as a prototype
var t = {
  tableId: 92
}
var c = new Proxy ({}, {
  get: function (taret, prop, receiver) {
    return 'Property ' + prop + ' doesn\'t exist...';
  }
});

Object.setPrototypeOf(t, c);

console.log(t.tableId);
console.log(t.size);

//Revocable Proxy
var tbl = {
  tableId: 92
}
let {proxy, revoke} = Proxy.revocable (tbl, {
  get: function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver) + 100;
  }
});

console.log(proxy.tableId);
revoke();
console.log(proxy.tableId);
