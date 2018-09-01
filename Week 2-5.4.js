function xo(str) {
  var count1 = str.split('x').length-1;
  var count2 = str.split('o').length-1;
  if (count1 == count2) {
    return ("true")
  } else {
    return ("false")
  }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));

