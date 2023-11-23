/**

** Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

**? Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

** Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

** Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

 */

const arr = [1, 25, 22, true, 'say hi', null, 92, 76];

function averageArray(currentArray) {
	const filteredArray = currentArray.filter(
		(number) => typeof number === 'number'
	);

	const sumPoint = filteredArray.reduce((accamulator, currentValue) => {
		return accamulator + currentValue;
	});

	let averagePoint = sumPoint / filteredArray.length;
	return averagePoint;
}

averageArray(arr);

function doMath(x, znak, y) {
	let res;
	if (znak === '+') {
		res = x + y;
	} else if (znak === '-') {
		res = x - y;
	} else if (znak === '*') {
		res = x * y;
	} else if (znak === '/') {
		res = x / y;
	} else if (znak === '%') {
		res = x % y;
	} else if (znak === '^') {
		res = Math.pow(x, y);
	} else {
		console.log('Undefind symbol');
	}
	return res;
}

const math = doMath(12, '^', 4);

//Declarated variables
let mainArray;
let subArray;

// Double array pushing func
function doubleArray() {
	//Get array length
	let createMainArray = Number(prompt('Write array length'));

	//Type of data
	if (typeof createMainArray === 'number') {
		mainArray = new Array(createMainArray);
	} else {
		alert('Wrong symbol. Number only!');
	}

	//Push new data to main array
	mainArray = prompt('Write array data').split(' ', mainArray.length);
	console.log(mainArray);

	//Get sub array length
	let createSubArrayLength = Number(prompt('Write sub array length'));

	//Type of data
	if (typeof createMainArray === 'number') {
		subArray = new Array(createMainArray);
		console.log(subArray);
	} else {
		alert('Wrong symbol. Number only!');
	}

	//Push new data to sub array
	subArray = mainArray.unshift(prompt('Write sub array data').split(' '));
	console.log(mainArray);
}

doubleArray();

//clear func
function textClear(text, symbols) {
	text = prompt('Write text, which need to clear on').split('');
	symbols = prompt('Write symbols to delete').split('');

	const strSymbols = symbols.join(', ');
	console.log(symbols);

	const clearText = text.map((symbol) => {
		const regex = new RegExp(`[${symbols.join('')}]`, 'g');
		return symbol.replace(regex, '');
	});

	console.log(`${clearText.join('')}`);

	return clearText.join('');
}

textClear();
