// Fetch API

// then/catch

// fetch('https://viacep.com.br/ws/01001000/json/')
//     .then((resposta) => {
//         resposta.json().then((dados) => console.log(dados));
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// async/await (Boas práticas)

async function obterDadosDoCep() {
    try {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
        const dados = await resposta.json();

        console.log(dados); 
    } catch (erro) {
        console.log('Deu errado!', erro);
    } finally {
        console.log('Terminou a requisição.');
    }
}

obterDadosDoCep();

