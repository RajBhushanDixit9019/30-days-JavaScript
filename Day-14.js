// this is day 14 of 30 days of javascript.

// for-in loop in JS...
// for..in loop is used to iterate the object properties..
const myobj={
    name:"Raj",
    age:23,
    course:"BCA"
}

// iterating an object using for..in loop...
for(key in myobj) {
    console.log(`${key}:${myobj[key]}`);
    // display's:
    // name:Raj
    // age:23
    // course:BCA

}
// using for..in loop with array object
const arr=[1,2,3,4];
for(i in arr){
    console.log(arr[i]);
    // display's: 1 2 3 4 
}


// for..of loop in JS..
let it=["Raj","Raju","Sonu","Monu","Goli"];

// iterating 'it' using for..of loop..
for(i of it){
    console.log(i);
    // display's: 'Raj' 'Raju' 'Sonu' 'Monu' 'Goli'
}
