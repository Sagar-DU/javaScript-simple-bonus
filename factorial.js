// Factorial with loop
/*
let factorial = 1;

for (let i = 5; i > 0; i--){
    factorial = factorial * i;
}
console.log(factorial);
*/

// Factorial with recursion
function factorial(i){
    if (i == 1){
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(5));
console.log(factorial(4));
