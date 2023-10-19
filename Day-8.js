// this is day 8 of 30 days of javascript: Arrays in javascript.

// Arrays in programming are reffered as collection of multiple elements...

// In terms of javascript array is indexed container to store multiple values...

// creating array...
let arr=[1,2,3,4,5];

// accessing array elements..
console.log(arr);

// accessing by index...
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Array methods...
arr.push(6)
console.log('Push:',arr);

arr.pop()
console.log('Pop:',arr);

arr.unshift(9)
console.log('Unshift:',arr);

arr.shift()
console.log('Shift:',arr);


console.log('Slice:',arr.slice(1, 3));

console.log('Splice:',arr.splice(1, 3));

console.log('Indexof:',arr.indexOf(5));

console.log('Includes:',arr.includes(5));

console.log('Reverse:',arr.reverse());