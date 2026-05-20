
const calc = document.getElementById('calc')

calc.addEventListener('click', imc);

function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const res = document.getElementById('res');

    if(nome !== '' && peso !== '' && altura !== ''){

        const alturaMetros = altura / 100;
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        res.textContent = `Olá ${nome}, seu IMC é ${valorIMC}`;

    } else {
        res.textContent = 'Preencha os campos acima!'
        return
    }
}