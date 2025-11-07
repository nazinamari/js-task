const products = [
    {
        name: 'Apple',
        category: 'fruits',
        price: 2
    },
    {
        name: 'Carrot',
        category: 'vegetables',
        price: 1
    },
    {
        name: 'Banana',
        category: 'fruits',
        price: 3
    },
    {
        name: 'Broccoli',
        category: 'vegetables',
        price: 2
    }
];
// const allproducts = [...products];
// console.log(allproducts);
// const key = Object.key(allproducts);
for (const product of products){
    const fruit = Object.keys(product);
// console.log(fruit);
}
const filteredProduct = products.filter((product)=>{
    return product.category === 'fruits';
});
console.log(filteredProduct);

//# sourceMappingURL=js-task.4a6f8bf8.js.map
