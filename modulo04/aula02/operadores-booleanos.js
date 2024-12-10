// Operadores Booleanos: Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); // Comparação
console.log(numero1 === '10'); // Compara tanto o conteúdo como o tipo (Boas práticas de JS)

console.log(numero1 !== numero2); // Compara tanto o conteúdo como o tipo (Boas práticas de JS)

console.log(numero1 <= numero2);

console.log(numero1 >= numero2);

const idadePessoa1 = 16;
const idadePessoa2 = 39;

// console.log(idadePessoa1 >= 18);
// console.log(idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // && -> E

console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // || -> OU

// Inversão
console.log(!true); // false

console.log(!(idadePessoa1 >= 18)); // false -> true