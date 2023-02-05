function reverseString(text) {
    let reverse = '';
    for (const string of text) {
        // console.log(string);
        reverse = string + reverse;
    }
    return reverse;
}
const reverseStringResult = reverseString('Hello! How are you?');
console.log(reverseStringResult);

