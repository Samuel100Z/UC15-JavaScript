
function mostrarCidade() {
    const inputCidade = document.getElementById("cidade");
    const pMensagem = document.getElementById("mensagem");
    
    const nomeCidade = inputCidade.value;
    
    if (nomeCidade.trim() === "") {
        pMensagem.textContent = "Por favor, digite o nome de uma cidade que tu quer ir!";
        pMensagem.style.color = "red";
        return;
    }
    
    pMensagem.textContent = `Tu vai pra ${nomeCidade}, valeu ai!`;
    pMensagem.style.color = "#333";
}

function destacarMensagem() {
    const pMensagem = document.getElementById("mensagem");
    
    pMensagem.style.fontSize = "18px";
    pMensagem.style.padding = "10px";
    pMensagem.style.borderRadius = "5px";
}

let contadorValor = 10;

function atualizarDisplayContador() {
    const spanContador = document.getElementById("valorContador");
    spanContador.textContent = contadorValor;
}

function aumentarContador() {
    contadorValor++;
    atualizarDisplayContador();
}

function diminuirContador() {
    contadorValor--;
    atualizarDisplayContador();
}