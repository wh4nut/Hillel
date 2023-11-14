const arr = new Array(1, 2, 3, 4, 5, 6);

arr.forEach((arr) => console.log('Масив за зростанням: ' + arr));

arr.splice(1, 3);
console.log(arr);
