// const product = { name: 'Apple', category: 'fruits', price: 2 };
// console.log(Object.keys(product));
// ['name', 'category', 'price']
// const products = [
// 	{ name: 'Apple', category: 'fruits', price: 2 },
// 	{ name: 'Carrot', category: 'vegetables', price: 1 },
// 	{ name: 'Banana', category: 'fruits', price: 3 },
// 	{ name: 'Broccoli', category: 'vegetables', price: 2 },
// ];
// for (const product of products) {
// 	console.log(Object.keys(product));
// }
// Object.keys() корисний лише якщо тобі треба переглянути або обробити поля об’єкта динамічно (наприклад, не знаючи їхніх назв наперед).
// 💡 Підсумок
// Ситуація	Як використовувати
// Отримати ключі одного об’єкта	Object.keys(product)
// Отримати ключі всіх об’єктів у масиві	for (const p of arr) console.log(Object.keys(p));
// Фільтруєш масив	❌ не треба Object.keys()
// Копіюєш масив	[...products] — достатньо
// 🧩 Задача: Порахувати кількість властивостей у кожному товарі
const products = [
    {
        name: 'Apple',
        category: 'fruits',
        price: 2
    },
    {
        name: 'Carrot',
        category: 'vegetables',
        price: 1,
        color: 'orange'
    },
    {
        name: 'Banana',
        category: 'fruits',
        price: 3,
        imported: true
    }
];
// 🔹 Твоя задача:
// Для кожного товару вивести його назву і кількість властивостей, які він має.
// Очікуваний формат виводу (у консоль):
// Apple: 3 properties
// Carrot: 4 properties
// Banana: 4 properties
for (const product of products){
    const name = product.name;
    const propers = Object.keys(product).length;
    console.log(`${name}: ${propers}`);
} // Можна зробити ще коротше (якщо хочеш показати знання деструктуризації):
 // for (const { name, ...rest } of products) {
 //   console.log(`${name}: ${Object.keys(rest).length + 1} properties`);
 // }

//# sourceMappingURL=js-task.57e03ba3.js.map
