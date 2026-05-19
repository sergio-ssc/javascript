//Funções
//modularizar o código

//FUNCTION ( arg1, arg2, arg3...){ EXC..}

function digaoi(){
    console.log("Oi, tudo bem?")
}

//EXECUTAR, CHAMAR, INVOCAR

digaoi();

//Argumentos

//Os parametros podem ser de qualquer tipo

function soma(a, b){
    const soma = a + b;

    console.log("Soma de: " + soma);
}

soma(2, 3); 

//Return: retorno de dados de uma função
//return x


function multiplica(a, b){
    const mult = (a * b);

    return mult;
}

const resultado = multiplica(2, 2);

console.log(resultado);

//A função não precisa de parametro, não precisa de retorno.

// Função anonima

const saudacao = function(nome){
    console.log("Olá " + nome);
}

saudacao("Samwise");

//Função anonima 2: callback
// é executar uma função como argumento


// Arrow functions ou Funções de flecha
// com uma sintaxe menor

// (arg1, arg2) => {}
const dividir = (a, b) => {
return a / b;
};

console.log(dividir(10, 5));

const multiplicacaoArrow = (a,b) => a * b;


//VOID
function meuNome(){
    console.log("Samwise");
}

meuNome();

console.log("Olá, seu nome é: " + meuNome());


//Parâmetros

function QualquerNome(nome){
    console.log(nome);
}

QualquerNome("Eu")

// numeros 

function soma(numero1, numero2){
    const  resultado = (numero1 * numero2);

    console.log(resultado);
}

soma(2, 3)

//RETURN

function EstaEndividado(receita, gastos){
    if(receita < gastos){
        return "Está endividado"
    } else {
        return "Não está endividado"
    }
}

const maria = EstaEndividado(2000, 1500);

console.log(maria);


//ARROW FUNTION = funão do tipo flecha

const digameunome = () => {
    console.log("Sam")
}

digameunome()