var relogio = setInterval(function () {
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    console.log(`${horas}:${minutos}:${segundos}`);

}, 1000);