// if

let idade1 = 18;

if (idade1 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// else if

let nota1 = 7;

if (nota1 >= 9) {
    console.log("Aprovado com distinção!");
} else if (nota1 >= 6) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}

// switch

let cor1 = "vermelho";

switch (cor1) {
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
let idade2 = 20;
let resultado = idade2 >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// Condicional aninhada (if dentro de outro if)
let idade3 = 22;
let temCarteira = true;

if (idade3 >= 18) {
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

let valor1 = 0;

if (valor1) {
    console.log("Este valor é truthy.");
} else {
    console.log("Este valor é falsy.");
}

// Truthy

let valor2 = "Olá, Mundo!";

if (valor2) {
    console.log("Este valor é truthy.");
} else {
    console.log("Este valor é falsy.");
}
