function contar() {
    var ini = document.getElementById('txti')
    var fi = document.getElementById('txtf')
    var pa = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length ==0 || fi.value.length ==0 || pa.value.length ==0){
        window.alert('Não é possível contar!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i =Number(ini.value)
        let f = Number(fi.value)
        let p =Number(pa.value)

        if (i < f) {
            // Contagem crescente
            for ( let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
            res.innerHTML += `\u{1F449} ${c} `
        } else {
            // Contagem regressiva
            for (let c =i; c >=f; c -= p){
                res.innerHTML += `\u{1F449} ${c} ` 
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}
