function isPalindrome(str) {
  let arr = [];
  for (let index = 0; index < str.length; index++) {
    // при необходимости можно сделать список всех знаков препинания
    if (str[index] != ' ') {
      arr.push(str[index].toLowerCase());
    }
  }
  console.log(arr.slice().reverse().join('') === arr.slice().join(''));
  return arr.slice().reverse().join('') === arr.slice().join('');
}

isPalindrome('А роза упала на лапу Азора'); // true
isPalindrome('Привет'); // false
