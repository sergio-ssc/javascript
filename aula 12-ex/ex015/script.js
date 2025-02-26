function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtn')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR]Verifique se os dados estão corretos!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero  = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.src = 'imagens/bebe-h.jpg.jpg'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-h.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','bebe-m')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem-m')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulta-m')
            } else {
                //idoso
                img.setAttribute('src','idosa-m')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

