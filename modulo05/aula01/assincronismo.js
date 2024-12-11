// const fs = require('fs');
// // 1. Callbacks

// // Função assíncrona (Ler um arquivo leva um tempo)
// console.log('ANTES da função de ler o arquivo...')
// fs.readFile('modulo05/aula01/arquivo.txt', (erro, conteudoDoArquivo) => {
//     if(erro) {
//         console.log('Ocorreu um erro ao tentar ler o arquivo: ', erro)
//     } else {
//         console.log(String(conteudoDoArquivo));
//     }
// } );

// console.log('DEPOIS da função de ler o arquivo...')

// // 1.1 setTimeout (funçaõ que cria um timer...)

// console.log('ANTES do setTimeout...')
// setTimeout(() => {
//     console.log('Isso aqui será executado após 2 segundos!')
// }, 2 * 1000)
// console.log('DEPOIS do setTimeout...')

// // 2. Promises (promessas)

// // Criando uma promessa

// const fs = require('fs');  // Importando o módulo fs

// console.log('ANTES da criação da promise...');

// function lerArquivoPromise() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('modulo05/aula01/arquivo.txt', (erro, conteudoDoArquivo) => {
//             if (erro) {
//                 reject('Ocorreu um erro ao tentar ler o arquivo: ', erro);
//             } else {
//                 resolve(String(conteudoDoArquivo));  // Converte o conteúdo do arquivo para string
//             }
//         });
//     });
// }

// // Foco apartir daqui...
// lerArquivoPromise()
//     .then((retornoDoResolveDaPromise) => {
//         console.log('Deu certo: ', retornoDoResolveDaPromise);
//     })
//     .catch((erro) => {
//         console.log('Deu ruim: ', erro);
//     })
//     .finally(() => {
//         console.log('Isso será executado, independente do sucesso ou fracasso da promessa, no final dela.');
//     })

// 3. Assync/await (Boas práticas de JS)
const fs = require('fs'); // Certifique-se de importar o módulo fs
function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('modulo05/aula01/arquivo.txt', (erro, conteudoDoArquivo) => {
            if (erro) {
                reject('Ocorreu um erro ao tentar ler o arquivo: ', erro);
            } else {
                resolve(String(conteudoDoArquivo));  // Converte o conteúdo do arquivo para string
            }
        });
    });
}

async function leituraDeDados() {
    console.log('Isso é executado ANTES da promise ser resolvida!');

    try {
        const dadosDoArquivoLido = await lerArquivoPromise(); // Espera a promessa ser resolvida para avançar no código

        console.log(dadosDoArquivoLido);
        console.log('Isso é executado DEPOIS da promise ser resolvida!');
    } catch (err) {
        console.log(err)
        console.log('Isso aqui é executado depois da promise (com erro).')
    } finally {
        console.log('Dentro do finally!');
    }
}

leituraDeDados();

