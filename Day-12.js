// this is day 12 of 30 days of JavaScript...

// map in JS...
// maps in a object in javascript which is a collection of key-vlaue pairs.
const m=new Map();

// setting key and value to map...
m.set('name', 'Raj');
m.set('age', 23);

// accessing the values...
console.log(m.get('name'));
console.log(m.get('age'));

// map methods...
console.log(m.has('name')); // ture

m.delete('age')
console.log(m.has('age')); // false


// set in JS...
// sets is a object in javascript which holds the collection of unique values...
let s=new Set();

// adding values...
s.add(1)
s.add(1) // this '1' is not added
s.add(2)
s.add(3)

// accessing the set values...
console.log(s); // display's Set(3) { 1,2,3 }