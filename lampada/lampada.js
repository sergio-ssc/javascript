const ligar = document.getElementById('turnOn');
const desligar = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if( !lampBroken ()){
    lamp.src = "imagens/ligada.jpg";
        }
}

function lampOff() {
    if( !lampBroken ()){
    lamp.src = "imagens/desligada.jpg";
        }
}

function lampCrack(){
    lamp.src = "imagens/quebrada.jpg"
}


ligar.addEventListener('click', lampOn)
desligar.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampCrack)