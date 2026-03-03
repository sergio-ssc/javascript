function carregar(){

var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são extatamente ${hora} horas.`

if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if ( hora >= 12 && hora < 18){
    //BOA TARDE
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    //BOA NOITE
    img.src = 'imagens/noite.jpg'
    document.body.style.background = 'darkblue'
}
}
