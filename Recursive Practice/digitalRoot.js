/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

//Emi why is this
/*
let num = 16
let arrNum = num.toString().split('').map(Number)
console.log(arrNum)
*/

//The same as this?
let num1 = 16;
let num2 = 942

//How I did it :( 
const digitalRoot = (n) => {
    let arrNum = n.toString().split('').map(e => Number(e));
    let arrSum = arrNum.reduce((acc, curr) => acc + curr, 0);
    if (arrSum.toString().length > 1) {
        digitalRoot(arrSum);
    } else {
        return arrSum;
    }
    return digitalRoot(arrSum);
}


console.log(digitalRoot(num2));

// How they did it >_<
// wtf is this I am offended
/*
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
*/

// This looks nice but what does the + + do here ♪～(￣、￣ )
/*
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
*/