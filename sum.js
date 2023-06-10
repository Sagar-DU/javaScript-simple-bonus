// Sum with loop
/*let sum = 0;
for (let i = 5; i > 0; i--) {
    sum += i;
}
console.log(sum);
*/

// Sum with recursive funciton
function sum(i){
    if (i == 1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(100));