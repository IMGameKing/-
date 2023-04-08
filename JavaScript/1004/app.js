// JavaScript 數字格式允許我們精確地表示介於 -9,007,199,254,740,992 (2^(−253)) 和 9,007,199,254,740,992 (2^253)
// 之間的所有整數。 如果使用大於此的整數值，則可能會丟失數字的精度。

// 數字支援的運算符號包含加法、減法、乘法 、除法、remainder（餘式） operator [也唸作mod]、
// exponentiation operator、++、--、 +=、-=、/=、*= 等等。

let x = 100;
let y = 50;
let z = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

let result = x % z;
console.log(result);

console.log(z ** z);
