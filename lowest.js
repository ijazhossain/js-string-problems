// Write a function to get the lowest number in an array
const findLowest = array => {
    let lowest = array[array.length - 1];
    for (let i = array.length - 1; i >= 0; i--) {
        if (lowest > array[i]) {
            lowest = array[i];
        }
    }
    return lowest;
}
const heights = [167, 190, 120, 165, 137, 265];
const result = findLowest(heights);
console.log(result);