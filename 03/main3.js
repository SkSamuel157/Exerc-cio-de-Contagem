let contador = 0;
let posicao;
let progresso = 0;

function atualizarContador() {
    contador++
    document.getElementById('contador').textContent = contador;
}

function iniciarContador() {
    posicao = setInterval(atualizarContador, 1000);
}

function pausarContador() {
    clearInterval(posicao);
}

function reiniciarContador() {
    pausarContador()
    contador = 0;
    document.getElementById('contador').textContent = contador;
}

document.getElementById('btnIniciar').addEventListener('click', iniciarContador);
document.getElementById('btnPausar').addEventListener('click', pausarContador);
document.getElementById('btnReiniciar').addEventListener('click', reiniciarContador);

iniciarContador();

document.getElementById('btnPausar').addEventListener('click', pausarContador);