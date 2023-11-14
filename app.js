const arr = new Array(1, 2, 3, 4, 5, 6, true);
console.log(
	arr +
		`
`
);

arr.forEach((arr) =>
	console.log(
		arr +
			`
`
	)
);

arr.splice(1, 3);
console.log(arr);
