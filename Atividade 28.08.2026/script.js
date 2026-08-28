// Questão 1
let a = 10;
let b = 5;
console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));

// Questão 2
let numero = 7;
console.log("O dobro é: " + (numero * 2));
console.log("O triplo é: " + (numero * 3));

// Questão 3
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos.");

// Questão 4
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média: " + media);

// Questão 5
let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let usuarioDigitado = prompt("Digite o usuário:");
let senhaDigitada = prompt("Digite a senha:");

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Login realizado com sucesso!");
} else if (usuarioDigitado !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else {
    console.log("Senha incorreta.");
}

// Questão Extra
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 > num2) {
    console.log("O maior número é " + num1 + ".");
} else if (num2 > num1) {
    console.log("O maior número é " + num2 + ".");
} else {
    console.log("Os dois números são iguais.");
}