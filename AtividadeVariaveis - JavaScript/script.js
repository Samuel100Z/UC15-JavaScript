let nomeCliente = prompt("Digite o nome do cliente:");
let valorCompra = Number(prompt("Digite o valor da compra (use ponto para centavos):"));

let respostaVip = prompt("O cliente é VIP? (Digite 'sim' ou 'não')");
let clienteVip = respostaVip.toLowerCase() === "sim";

let percentualDesconto = 0;
let valorDesconto = 0;
let valorFinal = 0;

if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500.00) {
    percentualDesconto = 15;
} else if (valorCompra >= 200.00) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

valorDesconto = valorCompra * (percentualDesconto / 100);
valorFinal = valorCompra - valorDesconto;

console.log(`Nome: ${nomeCliente}`);
console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
