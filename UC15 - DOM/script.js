/* function mudarTexto() {
    document.getElementById("titulo").textContent = "Você clicou no botão!";
}

function mudarCor() {
    document.getElementById("paragrafo").style.color = "blue";
} */

function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent = "Olá, " + nome + "!";
}

function aumentar() {
    contador++;
    
    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;

    document.getElementById("numero").textContent = contador;
}