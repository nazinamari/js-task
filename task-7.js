// 🔹 Рівень 1 — базовий

// Подвоїти числа

const numbers = [1, 2, 3, 4, 5];
// Використати map, щоб отримати новий масив, де всі числа подвоєні

const newNumbers = numbers.map((num) => num * 2);

// Вивести кожне слово

const words = ['apple', 'banana', 'cherry'];
// Використати forEach, щоб вивести у консоль кожне слово з його довжиною

words.forEach((word, index) => {
	console.log(`${index + 1}: ${word} ${word.length}`);
});

// Сумування чисел

const numbers1 = [10, 20, 30];
// Використати forEach, щоб порахувати суму всіх чисел
let sum = 0;

numbers1.forEach((number) => (sum += number));

// 🔹 Рівень 2 — середній

// Перетворення об’єктів

const users = [
	{ name: 'Ivan', age: 25 },
	{ name: 'Olga', age: 30 },
];
// Використати map, щоб створити новий масив тільки з іменами

const names = users.map((user) => user.name);

// Фільтр через forEach

const numbers2 = [1, 2, 3, 4, 5, 6];
// Використати forEach, щоб створити новий масив тільки з парних чисел
let newNumbers2 = [];

numbers2.forEach((number) => {
	if (number % 2 === 0) {
		newNumbers2.push(number);
	}
});

// Зміна властивостей в об’єктах

const products = [
	{ name: 'Shirt', price: 20 },
	{ name: 'Pants', price: 30 },
];
// Використати map, щоб створити новий масив де ціни знижені на 10%

const discountedProducts = products.map((product) => ({
	name: product.name,
	price: product.price * 0.9,
}));

console.log(discountedProducts);

// 🔹 Рівень 3 — складний

// Підрахунок повторень

const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// Використати forEach, щоб створити об’єкт, який підраховує скільки разів кожна буква зустрічається
// Очікуваний результат: { a: 3, b: 2, c: 1 }
let lettersCount = {};

letters.forEach((letter) => {
	if (lettersCount[letter]) {
		lettersCount += 1;
	} else {
		lettersCount[lettersCount] = 1;
	}
});

console.log(lettersCount);

// Комбінування map і forEach

const students = [
	{ name: 'Ivan', grades: [4, 5, 3] },
	{ name: 'Olga', grades: [5, 5, 4] },
];
// Використати map, щоб створити новий масив з об’єктами {name, averageGrade}
// Потім використати forEach, щоб вивести ці дані у консоль
const studentsaverageGrade = students.map((student) => ({
	name: student.name,
	averageGrade:
		student.grades.reduce((sum, grade) => sum + grade, 0) /
		student.grades.length,
}));

studentsaverageGrade.forEach((student) => console.log(student));

// Перетворення масиву рядків у об’єкт

const data = ['Ivan-25', 'Olga-30', 'Anna-22'];
// Використати map, щоб створити масив об’єктів {name, age}

const newArray = data.map((el) => {
	const [name, age] = el.split('-');
	return { name, age: Number(age) };
});

console.log(newArray);
