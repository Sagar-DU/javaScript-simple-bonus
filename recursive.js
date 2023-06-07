//Printing some numbers with for loop
/*
for (let i = 0; i < 6; i++) {
    console.log(i)  
}
*/

//Same thing with recursive funciton
function printingNumbers(i){
    //breaking the recuring
    if (i > 6) {
        return;
    }
    console.log(i);
    //Recuring
    printingNumbers(++i);
}
printingNumbers(0);