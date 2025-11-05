// 1. Створити масив чисел від 0 до 30

// a) Через цикл for

const numbers = [];

for (let i = 0; i <= 30; i += 1) {
	numbers.push(i);
}

console.log(numbers);

// b) Через Array.from()

const array1 = Array.from({ length: 31 }, (el, index) => index);

console.log(array1);

// c) Через .fill() + .map()

const array2 = new Array(31).fill(0).map((_, index) => index);

console.log(array2);

// 2. Універсальні функції

// a) Через цикл for

function createRange(start, end) {
	const array = [];

	for (let i = start; i <= end; i += 1) {
		array.push(i);
	}

	return array;
}

console.log(createRange(5, 25));

// b) Через Array.from()

const createRange1 = (start, end) =>
	Array.from({ length: end - start + 1 }, (_, index) => start + index);

console.log(createRange1(5, 25));

// c) Через .fill() + .map()

const createRangeFillMap = (start, end) =>
	new Array(end - start + 1).fill(0).map((_, index) => start + index);

console.log(createRangeFillMap(5, 25));
