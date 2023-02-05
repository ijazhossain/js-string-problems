const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

console.log(lyrics.split('').reverse().join(''));
const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// console.log(numbers.slice(2, 5));
const removeItem = numbers.splice(2, 1, 345);
console.log(removeItem);
console.log(numbers);