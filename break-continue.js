let products = [
    {
        name:"iPhone 14", price: 90000
    },
    {
        name:"iPhone 14 plus", price: 100000
    },
    {
        name:"iPhone 14 pro", price: 140000
    },
    {
        name:"iPhone 14 pro MAX", price: 150000
    },
    {
        name:"M2 Macbook Air 13", price: 90000
    },
    {
        name:"M2 Macbook Air 15", price: 120000
    },
    {
        name:"Macbook pro 13", price: 130000
    },
    {
        name:"Macbook pro 14", price: 150000
    },
    {
        name:"Macbook pro 16", price: 170000
    }
]

//Break in action
/* 
for (const product of products) {
    if (product.price > 100000){
        break;
    }
    console.log(product);
}
*/

//Continue in action
for (const product of products) {
    if (product.price > 100000){
        continue;
    }
    console.log(product);
}