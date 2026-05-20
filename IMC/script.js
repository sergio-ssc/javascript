
const calc = document.getElementById('calc')

calc.addEventListener('click', imc);

function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const res = document.getElementById('res');

    if(nome !== '' && idade !== '' && altura !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        res.textContent = valorIMC;

    } else {
        res.textContent = 'Preencha os campos acima!'
        return
    }
}


