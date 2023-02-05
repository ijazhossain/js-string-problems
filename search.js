const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const searchText = 'Pakhi';
// console.log(lyrics.includes(searchText));
// console.log(lyrics.indexOf(searchText));
if (lyrics.indexOf('sada') !== -1) {
    // console.log('exists inside the string')
}
else {
    // console.log('cannot find it');
}
console.log(lyrics.startsWith('2mi'));
console.log(lyrics.endsWith('2mi'));