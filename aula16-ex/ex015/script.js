let num = document.getElementById('num')
let box = document.getElementById('box')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number (n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        box.appendChild(item)
        res.innerHTML = ''
} else {
    window.alert('Valor inválido ou já encontrado na lista')

}
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        let pos = 0
        while(pos < valores.length){
            soma += valores[pos]

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `O Maior valor adicionado foi ${maior}</p>`
        res.innerHTML += `O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `A soma dos valores é ${soma}</p>`
        res.innerHTML += `A média dos valores é ${media}</p>`
        pos++
        }
    }
}