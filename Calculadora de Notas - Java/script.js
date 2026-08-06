//O projeto: calculadora de notas

let nome = prompt("Digite seu nome?");
let classe = prompt("Digite sua classe?");

let nota1Str = prompt("Digite a nota da avaliação 1:");
let nota2Str = prompt("Digite a nota da avaliação 2:");
let nota3Str = prompt("Digite a nota da avaliação 3:");

if (nota1Str && nota2Str && nota3Str) {

    let nota1 = Number(nota1Str.replace(',', '.'));
    let nota2 = Number(nota2Str.replace(',', '.'));
    let nota3 = Number(nota3Str.replace(',', '.'));

    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(1);

    let classificacao = "";

    if (media >= 7) {
        classificacao = "aprovado";
    } else {
        classificacao = "reprovado";
    }

    let resultado = `
    ____________________________
     RESULTADO DAS NOTAS
    ____________________________
    Nome: ${nome}
    Classe: ${classe}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}

    Média: ${mediaFormatada}
    Situação: ${classificacao}
    _____________________________`;

    console.log(resultado);

} else {
    console.log("Preenchimento cancelado ou dados inválidos.");
}
