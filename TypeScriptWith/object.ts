
interface product {
    id : number ,
    name : string ,
    stock : boolean
};


const product1 : product = {
    id : 1 ,
    name : "laptop",
    stock : true
};

const product2 : product = {
    id : 2 , 
    name : "TV",
    stock : false
};

console.log(`Product name is ${product1.name} and this item stock is ${product1.stock}`)
console.log(`Product name is ${product2.name} and this item stock is ${product2.stock}`)
