// npm init @eslint/config
// package.json
// .prettierrc.json
// .eslint.json

// Transferência de dados entre aplicações: API

// 1. Lendo um arquivo .JSON

// const fs = require('fs');
// fs.readFile('.eslintrc.json', (erro, dados) => {
//     if (erro) {
//         console.log('Erro: ', erro); 
//     } else {
//         // dados: Buffer com os dados do arquivo .json
//         const dadosObjeto = JSON.parse(String(dados)); //  Convertendo o Buffer em um objeto do JS

//         console.log(dadosObjeto.rules);
//     }
// });

// 2. Convertendo .JSON, em formato de string, para um objeto.

// const jsonString = '{"nome": "Yuri"}';

// console.log(JSON.parse(jsonString));

// 3. Convertendo um objeto do JS, em um JSON (string).

const pessoa = {
    nome: 'Yuri',
    idade: '28'
};

console.log(JSON.stringify(pessoa));