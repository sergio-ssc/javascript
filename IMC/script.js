
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

        if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc < 25) {
                classificacao = "com o Peso normal";
            } else if (imc < 30) {
                classificacao = " com Sobrepeso";
            } else {
                classificacao = "com Obesidade";
            }


        res.textContent = `Olá ${nome}, seu IMC é ${valorIMC} e você esta ${classificacao}`;
        

    } else {
        res.textContent = 'Preencha os campos acima!'
        return
    }
}