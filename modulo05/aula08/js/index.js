const botaoDiminuir = document.querySelector('#diminuir-botao');
const botaoAumentar = document.querySelector('#aumentar-botao');

const contadorElemento = document.querySelector('#contador');

const input = document.querySelector('#input');

// addEventListener list
botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual - 1;
});

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual + 1;
});

input.addEventListener('input', () => {
    console.log(input.value)
});

// Adicionando estilos
//inline
contadorElemento.style.color = 'red';
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.border = '1px solid #AAAA';
contadorElemento.style.width = '150px';

// Manipular as classes 
console.log(botaoDiminuir.classList);

botaoAumentar.classList.add('btn');
botaoDiminuir.classList.remove('btn');
