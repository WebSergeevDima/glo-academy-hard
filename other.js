let n = 266219;

let multiplication = String(n).split('').reduce((acc, num) => {
  return acc *= +num;
}, 1);

console.log('Произведение (умножение) цифр: ', multiplication);

let powSum = multiplication ** 3;

console.log('Первые 2 цифры: ', +String(powSum).slice(0, 2));