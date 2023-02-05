const reverseWord = word => {
    const split = word.split('');
    console.log(split);
    let reverse = [];
    for (let i = split.length - 1; i >= 0; i--) {
        reverse.push(split[i]);

    }
    return reverse.join('');
}
const reverseWordResult = reverseWord('I am a good boy');
console.log(reverseWordResult);