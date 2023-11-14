const arr = [];

for (const number of prompt('Введіть будь які числа:').split(' ')) {
	arr.push(Number(number));
}
console.log(arr);

arr.sort((a, b) => {
	return a - b;
});
console.log(arr);

arr.splice(1, 3);
console.log(arr);
