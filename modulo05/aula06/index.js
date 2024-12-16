"use strict";
// Use (  npx tsc --watch  ) para compilar arquivo para JS
let numero = 20; // Inferência de tipo
const pi = 3.1415;
let nome = 'Yuri';
let correta;
let resultado = numero * pi;
// let nomeDoUsuario = prompt('Qual é o seu nome?');
// console.log(nomeDoUsuario?.toUpperCase());
// Pode ser usado, porém não é uma boa prática, utilize uma array para apenas um tipo
// const misto: (number | string)[] = ['Yuri', 28, 1.79];
const idade = [];
const listaDeNomes = ['Yuri', 'Alves', 'Lopes'];
idade.push(1);
idade.push(16);
idade.push(23);
idade.push(43);
idade.push(17);
console.log(idade);
const menoresDeIdade = idade.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ['Yuri', 28];
// Type
const pessoa = {
    nome: 'Yuri',
    idade: 28,
    profissao: 'Desenvolvedor',
    altura: 1.77
};
