let n = 266219;

let sum = String(n).split('').reduce((acc, num) => {
  return acc += +num;
}, 0);

console.log('Произведение (умножение) цифр: ', sum);

let powSum = sum ** 3;

console.log('Первые 2 цифры: ', +String(powSum).slice(0, 2));