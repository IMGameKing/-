// JavaScript 中有 7 種基本數據類型。這 7 種基本數據類型被稱為primitive data type。
// Number – 整數與帶小數點的數字。
// BigInt – 任意長度的整數。
// String – 字符串。
// Boolean – true或false兩種值。
// null – 用來代表某個故意不存在的值。
// undefined – 未被賦值的變數，就是undefined。
// symbol – unique identifier。
// 除了這 7 種基本數據類型之外， JavaScript 的第八種數據類型叫做 object，屬於non-primitive data type。
// JavaScript 中的 object可能是array, object或是function等等。

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
