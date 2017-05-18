console.log('Base js loaded');

// NOTE: iterator section
// let ids = [900, 901, 902];
// let it = ids[Symbol.iterator]();
// console.log(it.next()); //logs out {done: false, value: 900}

// let idMaker = {
//   [Symbol.iterator](){
//     let nextId = 800;
//     return {
//       next(){
//         return {
//           value: nextId++,
//           done: false
//         };
//       }
//     };
//   }
// };

// let it = idMaker[Symbol.iterator]();
// console.log(it.next().value);//will log out 800
// console.log(it.next().value);// will log out 801

// for (let v of idMaker) {
//   if (v > 803) break;
//     console.log(v); //will log 800, 801, 802, 803
// }

let idMaker = {
  [Symbol.iterator](){
    let nextId = 800;
    return {
      next(){
        let value = nextId>803?undefined:nextId++;
        let done = !value;
        return {value, done};
      }
    };
  }
};

for (let v of idMaker)
  console.log(v); //will log 800, 801, 802, 803

  // NOTE: generator section

  // function *process(){
  //   yield 8000;
  //   yield 8001;
  // }
  // let it = process();
  // it.next(); //would log out {done: false, value: 8000}
  // it.next(); //would log out {done: false, value: 8001}
  // console.log(it.next());//would log out {done: true, value: undefined}

//   function *process(){
//     let nextId = 7000;
//     while (true)
//       yield(nextId++);
//   }
//
// for (let id of process()){
//   if (id > 7002) break;
//   console.log(id);// logs 7000, 7001, 7002
// }


// function *process(){
//   let result = yield;
//   console.log(`result is ${result}`);
// }
//
// let it = process();
// it.next();
// it.next(200);//will log 'result is 200'

// function *process(){
//   let newArray = [yield, yield, yield];
//   console.log(newArray[2]);
// }
//
// let it = process();
// it.next()//instantiates the function
// it.next(2);
// it.next(4);
// it.next(36); //will log 36 but function needs to be instantiated 3 times in order for this to log

// function *process() {
//   let value = 4 * (yield 42);
//   console.log(value);
// }
//
// let it = process();
// it.next();
// it.next(10); //will log 40

// function *process() {
//   yield 42;
//   yield*[1, 2, 3]; //yield* takes an interable and temporarily replaces values
// }
//
// let it = process();
// console.log(it.next());//logs 42
// console.log(it.next());//logs array[0]
// console.log(it.next());//logs array[1]
// console.log(it.next());//logs array[2]
// console.log(it.next());//logs {done: true, value: undefined}


// NOTE:Throw and Return section
function *process() {
  yield 9000;
  yield 9001;
  yield 9002;
}

let it = process();
console.log(it.next().value);
console.log(it.return('foo'));//must use 'catch' if using 'throw' otherwise will exit execution
console.log(it.next());

// NOTE: Promise section
function doAsync() {
  let p = new Promise(function(resolve, reject){
    console.log('in promise code');
    setTimeout(function (){
      console.log('resolving...');
      resolve(getAnotherPromise());
    }, 2000);
  });
  return p;
}

doAsync().then(function(){console.log('OK')}, function () {console.log('Nope')});

// let promise = doAsync();


// function noAsync() {
//   let p = new Promise(function(resolve, reject){
//     console.log('in no-promise code');
//     setTimeout(function (){
//       console.log('rejecting...');
//       reject();
//     }, 2000);
//   });
//   return p;
// }
//
// let unpromise = noAsync();

// let p1 = new Promise (...);
// let p2 = new Promise (...);
//
// Promise.race([p1, p2]).then( // race will throw the message of whichever promise is rejected or resolved first
//   function(value){console.log('OK')},
//   function(reason){console.log('nope')}
// );
