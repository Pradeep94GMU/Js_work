let score = 123

score = undefined

//for undefined: Number() -> return NaN
// for null -> 0
//if able to convert then it wil retirn a number else it will return a NaN. 

// console.log(Number(score)) //Number() is a wrapper class.

//conversion using wrapper class hota hai yaha...

console.log(1 + "2" + 1);
console.log("12" + 1 + "2" + 1);
console.log("2" + 1 + 45 + 22 + 71);
console.log(2 + 2 * 3 % 3);

let x = 100

let y = ++x
let z = x++
z = x++
z = ++x
console.log(z);
console.log(x);

// console.log((x++) + (++y)) //101 + 101 = 202



