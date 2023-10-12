// this JS script is day 1 of 30 days javascript: Variables and data types.

// Variables in JavaScript:

// In JavaScript the variable are of 3 type as of modern JavaScript

// var, let and cost.
// Each variable type have some difference

// var Variable...
var a=10;
// var variables are function scoped or global scoped.
function getvar(){ 
    a=0
    console.log(a)
}
// let Variable...
// let declaration of variable is introdused in ES6 in JacaSript. They are block-scoped.
function getlet(){
    let l=1
    console.log(l)
}
console.log(l)// RefferenceError:l is not defined.

// const Variables...
const c='raj'
function getconst(){
    c='Raj'//Uncaught ReferenceError: Cannot access 'c' before initialization
    console.log(c)
}