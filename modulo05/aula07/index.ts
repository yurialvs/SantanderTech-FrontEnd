// Use (  npx tsc --watch  ) para compilar arquivo para JS

// Classe: abstração
// Definição de abstração de uma pessoa
class Pessoa {
    // atributos: caracteristicas
    nome: string;
    idade: number;
    altura: number;

    // métodos: ação (função)

    // método construtor
    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    dormir() {
        console.log('Dormindo...');
    }
}

// Criando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Yuri', 28, 1.81);