let products = [
    {
        name:"iPhone 14", price: 100000
    },
    {
        name:"iPhone 14 plus", price: 120000
    },
    {
        name:"iPhone 14 pro", price: 140000
    },
    {
        name:"iPhone 14 pro MAX", price: 150000
    },
    {
        name:"M2 Macbook Air 13", price: 100000
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

function search(products, searchText){
    let searchResult = [];
    for (const product of products) {
        if(product.name.includes(searchText)){
            // console.log(product.name);
            searchResult.push(product);
        }
    }
    return searchResult;
}

console.log(search(products, "iPhone"));