let n = 266219;

let sum = 0;

String(n).split('').forEach(num => {
  sum += +num;
});

console.log('Произведение (умножение) цифр: ', sum);

let powSum = sum ** 3;

console.log('Первые 2 цифры: ', +String(powSum).slice(0, 2));