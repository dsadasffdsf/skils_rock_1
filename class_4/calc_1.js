class Calculator {
  constructor() {}
  add(a, b) {
    console.log(a + b);

    return a + b;
  }
  subtract(a, b) {
    console.log(a - b);

    return a - b;
  }
  multiply(a, b) {
    console.log(a * b);

    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      //   throw new Error('Ошибка , на 0 лучше не делить');
      console.log('Ошибка , на 0 лучше не делить');
      return null;
    }
    console.log(a / b);

    return a / b;
  }
}
const accountant = new Calculator();
accountant.add(1, 7);
accountant.subtract(1, 7);
accountant.multiply(2, 7);
accountant.divide(15, 3);
