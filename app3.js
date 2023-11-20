const str = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

const arr = Array.from(str);
// // const arr = str.split();
console.log(arr);

const clearedText = arr.reduce((acc, item) => {
	return acc + item.replace(/[,.-;:'"]/g, '');
}, '');

const arrClearedText = clearedText.split(' ');
console.log(arrClearedText);

const clearedWords = arrClearedText.map((item) => item.replace(/\n/g, ''));

console.log(clearedWords);

const sortedWords1 = clearedWords.sort();
console.log(sortedWords1);

//!----------------------------------------------------------------------------

// Розділити рядок на слова, видаливши пунктуацію та перевести в нижній регістр

const wordsArray = str
	.split(/[\s\n]+/)
	.map((word) => word.replace(/[.,;:'"]/g, '').toLowerCase());

// Підрахунок кількості кожного слова

const wordCount = wordsArray.reduce((acc, word) => {
	acc[word] = (acc[word] || 0) + 1;
	return acc;
}, {});

console.log('Ворд каунт: ', wordCount);

// Сортування та вивід топ 10 слів

const keys = Object.keys(wordCount);

console.log('key number: ', keys);

const sortedWords = keys
	.sort((a, b) => {
		const resault1 = wordCount[b] - wordCount[a];
		console.log(
			'resault counter: ',
			resault1,
			' a: ',
			a,
			' b: ',
			b,
			' wordCountA: ',
			wordCount[a],
			' wordCountB: ',
			wordCount[b]
		);
		return resault1;
	})
	.slice(0, 3);

console.log(sortedWords);

//!----------------------------------------------------------------------------
