// TODO Відфільтрувати лише ті об’єкти, де категорія є фрукт.

const products = [
	{ name: 'Apple', category: 'fruits', price: 2 },
	{ name: 'Carrot', category: 'vegetables', price: 1 },
	{ name: 'Banana', category: 'fruits', price: 3 },
	{ name: 'Broccoli', category: 'vegetables', price: 2 },
];

const filteredProduct = products.filter((product) => {
	return product.category === 'fruits';
});

console.log(filteredProduct);

//* const fruits = products.filter((p) => p.category === 'fruits');
