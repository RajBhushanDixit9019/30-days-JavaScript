// this is day 13 of 30 days of JavaScript.

// Loops and Iterations in JavaScript...

// for loop...
let n=10;
console.log("for loop:");
for(i=1;i<=n;i++){
    console.log(i);
}

// do-while loop...
i=1;
console.log("do while loop:");
do{
    console.log(i);
    i++;
}while(i<=n);

// while loop...
let j=1;
console.log("while loop:");
while(j<=n){
    console.log(j);
    j++;
}

// Break statement... 
let k=6
while(true){
    if(k===6){
        console.log("break is used");
        break;
    }
}

// label statement...this is used with break or continue statement
var sum = 0, a = 1; 
console.log("Label statement:");
// Label for outer loop 
outerloop: while (true) { 
	a = 1; 

	// Label for inner loop 
	innerloop: while (a < 3) { 
		sum += a; 
		if (sum > 12) { 

			// Break outer loop from inner loop 
			break outerloop; 
		} 
		console.log("sum = " + sum); 
		a++; 
	} 
} 

// continue statement.. it is used to restart the loop statements in js.

// if we use continue without label then it terminates the current iteration.
// if we use continue with label then it execuites that label... 
console.log("continue statement:");
// without label example:
console.log("without label:");

for(i=1;i<=10;i++){
    if(i===5){
        console.log("continue is used and iteration finds 5");
        continue;
    }
    console.log(i);
}

// with label example:
console.log("with label:");
let n1 = 0;
let n2 = 10;
while (i < 4) {
  console.log(n1);
  n1 += 1;
  checkj: while (n2 > 4) {
    console.log(n2);
    n2 -= 1;
    if (n2 % 2 === 0) {
      continue checkj;
    }
    console.log(n2, "is odd.");
  }
  console.log("n1 =", n1);
  console.log("n2 =", n2);
}
