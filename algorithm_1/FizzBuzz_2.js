function fizzBuzz() {
  const arr = [];
  for (let index = 1; index <= 100; index++) {
    if (index % 5 == 0 && index % 3 == 0) {
      arr.push('FizzBuzz');
    } else if (index % 5 == 0) {
      arr.push('Buzz');
    } else if (index % 3 == 0) {
      arr.push('Fizz');
    } else {
      arr.push(index);
    }
  }
  console.log(arr);
  return arr;
}
fizzBuzz();
