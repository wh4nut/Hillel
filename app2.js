function closure() {
	let res = 0;
	function sum(x) {
		res += x;
		return res;
	}
	return sum;
}
const result = closure();
console.log(result(3));
console.log(result(5));
console.log(result(20));

