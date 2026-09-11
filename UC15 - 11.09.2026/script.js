function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media1 = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com média ${media1}`);

if (media1 >= 6) {
    console.log(`${nome} está aprovado!`);
} else {
    console.log(`${nome} está reprovado.`);
}


calcularMedia(nota1, nota2);

//Ca-Calebe ele ta ferrado

function calcularValorTotal(valorPassagem, valorHospedagem, valorAlimentacao, valorPasseio) {
    return valorPassagem + valorHospedagem + valorAlimentacao + valorPasseio;
}

let nomeNormal = prompt("Digite o seu nome:");
let valorPassagem = Number(prompt("Digite o valor da passagem:"));
let valorHospedagem = Number(prompt("Digite o valor das hospedagens:"));
let valorAlimentacao = Number(prompt("Digite o valor da alimentação:"));
let valorPasseio = Number(prompt("Digite o valor dos passeios:"));

let valorTotal = calcularValorTotal(valorPassagem, valorHospedagem, valorAlimentacao, valorPasseio);

console.log(`${nomeNormal} gastou um total de R$ ${valorTotal}`);

if (valorTotal <= 2000) {
    console.log(`${nomeNormal}, sua viagem está dentro do orçamento!`);
} else {
    console.log(`${nomeNormal}, sua viagem está acima do orçamento!`);
}

calcularValorTotal(valorPassagem, valorHospedagem, valorAlimentacao, valorPasseio);