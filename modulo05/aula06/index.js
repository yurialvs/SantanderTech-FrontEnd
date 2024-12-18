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
const pessoa = {
    nome: 'Yuri',
    idade: 28,
    profissao: 'Desenvolvedor',
    altura: 1.77
};
const pessoa2 = {
    nome: 'Outra pessoa',
    idade: 90,
    altura: 1.81
};
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'lower');
console.log('Numero Escolhido: ', numeroEscolhido);
const pessoas = {
    '100.010.001-00': {
        nome: 'Fulano',
        idade: 20,
        altura: 1.80,
    },
    '000.030.003-00': {
        nome: 'Ciclano',
        idade: 23,
        altura: 1.82,
    }
};
