let x = 45;
let y = 55;
let z = x;
x = y;
y = z;
console.log(x, y);

// swap value by destructuring
[x, y] = [y, x];
// console.log(x, y);