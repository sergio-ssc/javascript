let musicas = [
    {titulo: 'In the Morning',
        artista: 'Blue Beat review',
        src: 'musicas/In the Morning - Blue Beat review.mp3',
        img: 'imagens/musica1.jpg'},

    {titulo: 'Kuntry Boy',
        artista: 'Anno Domini Beats',
        src: 'musicas/Kuntry Boy - Anno Domini Beats.mp3',
        img: 'imagens/musica2.jpg'},

    {titulo: 'Wildfire',
        artista: 'Jessie Villa',
        src: 'musicas/Wildfire - Jessie Villa.mp3',
        img: 'imagens/musica3.jpg'
    },
]

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let img = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

let indexMusica = 0;

//---INICIALIZAÇÃO

renderizarMusica(indexMusica);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//---EVENTOS
document.querySelector('.play').addEventListener('click', tocarMusica);
document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica)
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica >= musicas.length) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)
});


//---FUNÇÕES
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        img.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();

    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();

    document.querySelector('.play').style.display = 'block';
    document.querySelector('.pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100)  + '%';

    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

    let duracao = document.querySelector('.fim');
    duracao.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

