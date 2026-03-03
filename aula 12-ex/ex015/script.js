function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txnumber')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var txsex = document.getElementsByName('txsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if (txsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else if (idade >= 50) {
                img.setAttribute('src', 'imagens/idoso-h.jpg')
            }
        } else if (txsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta-m.jpg')
            } else if (idade >= 50) {
                img.setAttribute('src', 'imagens/idosa-m.jpg')
            }
        }

        res.innerHTML = `Idade calculada: ${idade} anos de um(a) ${genero}`
        imagemContainer.innerHTML = ''
        imagemContainer.appendChild(img)
    }
}
