
const calc = document.getElementById('calc')

calc.addEventListener('click', imc);

function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const res = document.getElementById('res');

    if(nome !== '' && peso !== '' && altura !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (valorIMC < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (valorIMC < 25) {
                classificacao = "com o Peso normal";
            } else if (valorIMC < 30) {
                classificacao = "levemente acima do peso";
            } else if (valorIMC < 35){
                classificacao = "com Acima do peso";
            } else {
                classificacao = "com Sobrepeso"
            }


        res.textContent = `Olá ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
        

    } else {
        res.textContent = 'Preencha os campos acima!'
        return
    }
}