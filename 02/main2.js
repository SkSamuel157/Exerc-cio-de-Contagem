//Inicializa a contagem
let contador = 0;
let posicao; // Variável para armazenar a posição do Intervalo

// Função para atualizar o contador
function atualizarContador() {
    contador++;
    document.getElementById('contador').textContent = contador;
}

function IniciarContador() {
    posicao = setInterval(atualizarContador, 1000);
}
function pararContador() {
    clearInterval(posicao);
}


// Inícia o contador quando a Pág Carrega
IniciarContador();

// Configura o botão para para o contador quando clicado
document.getElementById('btnParar').addEventListener('click', pararContador);