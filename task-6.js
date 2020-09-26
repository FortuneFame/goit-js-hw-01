let input;
let total = 0;

while ((input = prompt('Введите число', ''))) {
  input = Number(input);
  total += input;

  console.log(input);
}

// if (input.replace(/\d/g, '').length) alert('вы ввели не только цифры');

console.log('Общая сумма чисел равна:', total);
