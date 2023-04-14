// JavaScript是個物件導向的程式語言，所以JavaScript當中的數字可被視為是物件。以下是數字常見可用的methods：
//  toString() – return一個數字的String。
//  toFixed(n) – return 被轉換後的數字，到小數點後第n位數。
// 注意！ 二進制不能精確表示所有小數。 這可能會導致意外結果，例如 0.1 + 0.2 === 0.3 會return false 。

let age = 27;
console.log(age.toString() + age + age);
console.log(typeof age);

const pi = 3.1415926535;
console.log(pi.toFixed(4));
console.log(typeof pi.toFixed(2));
