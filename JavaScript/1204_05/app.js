// 編寫一個名為position的函式，唯一的參數是一個String，
// 其功能為找到參數String當中的第一個大寫字母，
// 並且回傳大寫字母的值以及其index位置。

// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

function position(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      return string[i] + " " + i;
    }
  }

  return -1;
}

console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
