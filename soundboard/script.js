let audios = [
    {caminho: 'audios/grito.mp3', descricao: 'Grito'},
    {caminho: 'audios/jesus.mp3', descricao: 'Jesus'},
    {caminho: 'audios/nao-e-o-pai.mp3', descricao: 'Não é o pai'},
    {caminho: 'audios/pare.mp3', descricao: 'Pare'},
    {caminho: 'audios/que-isso-meu-filho.mp3', descricao: 'Que isso meu filho'},
    {caminho: 'audios/ratinhoo.mp3', descricao: 'Ratinhoo'},
    {caminho: 'audios/uepa.mp3', descricao: 'UEPA'},
    {caminho: 'audios/vixe-ratinho.mp3', descricao: 'Vixe'},
    {caminho: 'audios/xaropinho.mp3', descricao: 'Xaropinho'},

]

let botoes = document.querySelectorAll('.botao');

let legendas = document.querySelectorAll('p');



for (let i = 0; i < 9; i++){
    legendas[i].textContent = audios[i].descricao;

    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);

        audioTag.addEventListener('loadeddata', () =>{
            audioTag.play()
        })
        audioTag.play();
    })
})