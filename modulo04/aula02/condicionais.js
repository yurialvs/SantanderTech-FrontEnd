// if

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// else if

let nota = 7;

if (nota >= 9) {
    console.log("Aprovado com distinção!");
} else if (nota >= 6) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}

// switch

let cor = "vermelho";

switch (cor) {
    case "azul":
        console.log("A cor é azul.");
        break;
    case "vermelho":
        console.log("A cor é vermelho.");
        break;
    case "verde":
        console.log("A cor é verde.");
        break;
    default:
        console.log("Cor não reconhecida.");
}

// Operador ternário (condicional em uma linha)
let idade = 20;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// Condicional aninhada (if dentro de outro if)
let idade = 22;
let temCarteira = true;

if (idade >= 18) {
    if (temCarteira) {
        console.log("Você pode dirigir.");
    } else {
        console.log("Você não tem carteira de motorista.");
    }
} else {
    console.log("Você é menor de idade.");
}

// Falsy: 0, false, "", null, undefined, NaN
// Truthy: Qualquer outro valor, como "texto", 1, [], {}
// Falsy 

let valor = 0;

if (valor) {
    console.log("Este valor é truthy.");
} else {
    console.log("Este valor é falsy.");
}


// Truthy

let valor = "Olá, Mundo!";

if (valor) {
    console.log("Este valor é truthy.");
} else {
    console.log("Este valor é falsy.");
}
