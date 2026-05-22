const img = document.getElementById('img')
const btn = document.getElementById('btn')
let colorIndex = 0
let interValId = null


const trafficLight = ( event ) => {

    stop();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['vermelho', 'amarelo', 'verde'] 
    const cor = colors[ colorIndex ];

    turnOn[color]()
    nextIndex();
}

const stop = () => {
    clearInterval( interValId ) 
}

const turnOn = {
    'vermelho': () => img.src = 'img/vermelho.png',
    'amarelo': () => img.src = 'img/amarelo.png',
    'verde': () => img.src = 'img/verde.png',
    'auto': () => {interValId = setInterval( changeColor, 1000)}
}


btn.addEventListener('click', trafficLight)