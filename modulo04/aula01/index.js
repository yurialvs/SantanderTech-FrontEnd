console.log("Hello, world");

// Variáveis

//JavaScript possui tipagem dinâmica: infere os tipos de dados
// var(variável) = (string)
var nomeDoAluno = 'Yuri'; // Camel case como padrão
var idade = 27; // number
var altura = 1.77; // number
var estudando = true; // boolean

// Retorna as strings atribuidas as variáveis
console.log(nomeDoAluno);
console.log(idade);
console.log(altura);
console.log(estudando);

// Retorna o tipo variável
console.log(typeof estudando);

console.log(typeof altura, altura);

// Declarando uma  variável, sem atribuir uma string
var semConteudo;
console.log(semConteudo);

// Declarando variáveis na mesma linha
var curso = 'Front-end em React', topico = 'JavaScript Básico I';
console.log(curso, topico);

// Tipos de variáveis
// Não utilize var nos códigos do JS

// Permite alterar dados
let nota = 10;

// Não permite alterar
const mediaDoAluno = 8;

nota = 9;
// mediaDoAluno = 5;  -> Não é permitido esta ação
console.log(nota);
console.log(mediaDoAluno);