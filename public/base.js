console.log('Hello World, from base!');

console.log('Symbol basics section:');
// let eventSymbol = Symbol('resize event');
// console.log(typeof eventSymbol);//logs out 'symbol'

// const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
// console.log(CALCULATE_EVENT_SYMBOL.toString());//logs out "Symbol('calculate event')"

// // NOTE: symbols can be assigned to multiple variablse if the .for is exactly equal.
// let s = Symbol.for('event');
// let s2 = Symbol.for('event');
// console.log(s === s2);//logs out 'true'
//
// let s = Symbol.for('event');
// let s2 = Symbol.for('event2');
// console.log(s === s2);//logs out 'false'

// let s = Symbol.for('event');
// let description = Symbol.keyFor(s);
// console.log(description); //logs out the human friendly 'event' for location of Symbol

let article = {
  title: 'Whiteface Mountain',
  [Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value);

console.log(Object.getOwnPropertySymbols(article));//logs out the string where Symbol is used to create it.


// NOTE: Well-know Symbols Section
console.log('In well-known symbol section:');
// let Blog = function() {};
// Blog.prototype[Symbol.toStringTag] = 'Blog Class';
// let blog = new Blog();
// console.log(blog.toString()); //logs out [object Blog Class]

// let values = [8, 12, 16];
// values[Symbol.isConcatSpreadable] = false;
// console.log([].concat(values)); //logs [[8, 12, 16]]

// let sum = values + 100;
// console.log(sum); //logs 8, 12, 16100 due to coercion on the last array value

let values = [8, 12, 16];
values[Symbol.toPrimitive] = function (hint){
  console.log(hint);
  return 42;
};
let sum = values + 100;
console.log(sum);

// NOTE: Object section
console.log('In Object section:');

// let a = {
//   x: 1
// };
// let b = {
//   y: 2
// };
// Object.setPrototypeOf(a, b);
// console.log(a.y); //logs out 2 due to prototype chain

// let a = {a: 1}, b = {b:2};
//
// let target = {};
// Object.assign(target, a, b);
// console.log(target);//logs {a: 2, b:2};

// let a = {a: 1}, b = {a: 5, b:2};
// let target = {};
// Object.assign(target, a, b);
// console.log(target); //logs {a: 5, b:2}

// let a = {a: 1}, b = {a: 5, b:2};
//
// Object.defineProperty(b, 'c', {
//   value: 10,
//   enumerable: false
// });
//
// let target = {};
// Object.assign(target, a, b);
// console.log(target);  //logs {a: 5, b:2} - 'c' is not included because it is not enumerable

let a = {a: 1}, b = {a: 5, b:2}, c = {c: 20};

Object.setPrototypeOf(b, c);

let target = {};
Object.assign(target, a, b);
console.log(target);//logs {a: 5, b:2} because the .assign does not follow prototype chain

// let amount = NaN;
// console.log(Object.is(amount, amount)); // .is will evaluate this to true as opposed to === in earlier versions.

let amount = 0, total = -0;
console.log(Object.is(amount, total)); // .is will evaluate this to false as opposed to === in earlier versions.

// let title = 'Santa Barbara Surf Riders';
// console.log(title.startsWith('Santa')); //logs out true because exactly equal

// let title = 'Santa Barbara Surf Riders';
// console.log(title.endsWith('Rider')); //logs out false

// let title = 'Santa Barbara Surf Riders';
// console.log(title.includes('Ba')); //logs out true because 'Ba' is inside the string

var title = "Surfer's \u{1f3c4} Blog";
console.log(title); //logs out Surfer emoji

let wave = '\u{1f30a}';
console.log(wave.repeat(10));//logs out 10 wave emoji
