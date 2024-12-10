const prompt = require('readline-sync');

const idade = prompt.question('Qual é a sua idade?');

console.log('O usuário tem', idade, 'anos de idade.');


// npm install readline-sync
// Biblioteca para pegar dados do usuário inseridos.

// Conversão manual

const idadeNumber =  Number(idade)
console.log(idadeNumber, typeof idadeNumber)

console.log(Number("X"));  // NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(0)); // Apenas o 0 é false

// Coerção Implicita

console.log(1 + "1"); 
console.log(10 - "5");

let n = 1 + '1'; // '11' (String)
n = n + 1; // 11 - 1 = 10

console.log(n);

console.log(2 + 3 + 4 + '5'); // 5 + 4 + '5' = 9 + '5' = '95'

console.log('5' + 2 + 3 + 4); // '52' + 3 + 4 = '523' + 4 = '5234'

console.log('10' - '4' - '3' - 2 + '5'); // 14 - '3' - 2 + '5' = 11 - 2 + '5' = 9 + '5' = '15'
