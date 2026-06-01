function atualizarTempo() {
    var display = document.querySelector('.display');
    let agora = new Date();


    var horarioAtual = corrigirFormato(agora.getHours()) + ':' + corrigirFormato(agora.getMinutes()) + ':' + corrigirFormato(agora.getSeconds());

    display.textContent = horarioAtual;
}

function corrigirFormato(numero){
    if (numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

console.log(horarioAtual);
