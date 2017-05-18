// let salaries = Array.of(90000);
// console.log(salaries.length);

// let amounts = [800, 810, 820];
// let salaries = Array.from(amounts, v => v+100); //create a new array based on the amounts
// console.log(salaries);

let amounts = [800, 810, 820];
let salaries = Array.from(amounts, function(v){
  return v + this.adjustment;
}, {adjustment: 50}); //create a new array based on the amounts
console.log(salaries);

let figures = [600, 700, 800];
figures.fill(900, 1, 2); //900 is the new value, 1 is the starting index, 2 is the stopping index //using index -1 will count from the end
console.log(figures);//will log [600, 900, 800]

// let result = figures.find(value => value >= 700);
// console.log(result); // will return first item that meets criteria

let result = figures.findIndex(function(value, index, array){
  return value == this;
}, 800);
console.log(result);

// figures.copyWithin(2, 0);
// console.log(figures);

// NOTE: Map & WeakMap section
console.log('Map Section:');
// let employee1 = {name: 'Jake'};
// let employee2 = {name: 'Janet'};

// let employees = new Map();
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// console.log(employees.get(employee1));//logs 'ABC'
// console.log(employees.size);//logs 2

// employees.delete(employee2);
// console.log(employees.size);//logs out 1
//
// employees.clear();
// console.log(employees.size);// logs out 0

// let employee1 = {name: 'Jake'};
// let employee2 = {name: 'Janet'};
// let arr = [
//   [employee1, 'ABC'],
//   [employee2, '123']
// ];
//
// let employees = new Map(arr);
// console.log(employees.size);//logs out 2

// let list = [...employees.values()]; //would log out ['ABC', '123']
// let list = [...employees.entries()];
// console.log(list[0][1]);//logs ABC

let employee1 = {name: 'Jake'};
let employee2 = {name: 'Janet'};

let employees = new WeakMap([
  [employee1, 'ABC'],
  [employee2, '123']
]);

employee1 = null;

console.log(employees.size);//logs undefined

// NOTE: Set & WeakSet
console.log('in Set section: ');

let perks = new Set();

perks.add('Car');
perks.add('Super Long Vacation');
perks.add('Car');

console.log(perks.size);//will log out 2 because Set only counts unique values

// let perks = new Set([ //different way to create a set
//   'Car',
//   '10 Weeks Vacation',
//   'Jet'
// ]);

// let p1 = {name: 'Ducks'};
// let p2 = {name: 'Geese'};
// let birds = new WeakSet([p1, p2]);

// console.log(birds.has(p2));//should log true

// NOTE: Subclass Section
console.log('Subclass section:');

class Pork extends Array {
  sum(){
    let total = 0 ;
    this.map(v => total += v);
    return total;
  }
}

let a = Pork.from([3, 10, 20]);
console.log(a.sum());

// let newArray = a.reverse();
// console.log(newArray instanceof Pork);//logs true
