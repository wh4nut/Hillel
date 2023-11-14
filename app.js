for (i = 10; i <= 20; i++) {
	console.log(i);
}

for (i = 10; i <= 20; i++) {
	const quadro = i * i;
	console.log(quadro);
}

for (i = 1; i <= 10; i++) {
	const tab = 7 * i;

	console.log(tab);
}

let num = 0;
for (i = 1; i <= 15; i++) {
	num += i;

	console.log(num);
}

let num1 = 1;
for (i = 15; i <= 35; i++) {
	num1 *= i;

	console.log(num1);
}

let avrg = 0;
for (i = 1; i <= 500; i++) {
	avrg += i;
	const res = avrg / 500;
	console.log(res);
}

for (i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

for (i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

const nature = Number(prompt('Напишіть число:'));

for (i = 1; i <= nature; i++) {
	if (nature % i === 0) {
		console.log(i);
	}
}

const nature = Number(prompt('Напишіть число:'));

for (i = 1; i <= nature; i++) {
	if (nature % 2 === 0 && i % 2 === 0) {
		console.log(i);
	}
}

const nature = Number(prompt('Напишіть число:'));
let summ = 0;
for (i = 1; i <= nature; i++) {
	if (nature % 2 === 0 && i % 2 === 0) {
		summ += i;
		console.log(i);
	}
}

console.log('сума ' + summ);

let it = 1;

for (i = 1; i <= 10; i++) {
	for (y = 1; y <= 10; y++) {
		const aY = i * y;
		console.log(aY);
	}
}
