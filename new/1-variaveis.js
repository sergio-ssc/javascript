// Váriaveis

// Variáveis são usadas para armazenar dados e valores. Elas são como recipientes que guardam informações que podem ser usadas e manipuladas ao longo do código.

//3 formas de cirar váriaveis:

//1. var (antiga forma, não é mais recomendada)
var nome = "João";
console.log(nome); // Saída: João

//2. let (recomendada para variáveis que podem ser reatribuídas)
let idade = 30;
console.log(idade); // Saída: 30           

//3. const (recomendada para variáveis que não devem ser reatribuídas)
const altura = 1.75;
console.log(altura); // Saída: 1.75


console.log('Seu nome é ' + nome + ', você tem ' + idade + ' anos e sua altura é de ' +  altura + ' metros '); // Saída: Seu nome é João, você tem 30 anos e sua altura é de 1.75 metros

// Template literals (forma mais moderna de concatenar strings)
console.log(`Seu nome é ${nome}, você tem ${idade} anos e sua altura é de ${altura} metros`); // Saída: Seu nome é João, você tem 30 anos e sua altura é de 1.75 metros

//Tipos de dados em JavaScript:
//1. String: representa texto
let cidade = "São Paulo";   
//2. Number: representa números
let temperatura = 25.5;
//3. Boolean: representa valores verdadeiros ou falsos
let isRaining = false;
//4. Null: representa a ausência de valor, não tem um valor específico
let valorIndefinido = null; 
//5. Undefined: representa uma variável que foi declarada mas não inicializada, esqueceu de atribuir um valor
let valorNaoDefinido; 
//6. Object: representa objetos complexos
let pessoa = {
    nome: "Maria",
    idade: 28
};
//7. Array: representa uma lista de valores
let frutas = ["maçã", "banana", "laranja"];


//typeof: operador que retorna o tipo de dado de uma variável
console.log(typeof nome); // Saída: string
console.log(typeof idade); // Saída: number
console.log(typeof isRaining); // Saída: boolean



//tipagem dinâmica: JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de dado de uma variável pode mudar durante a execução do programa
let variavel = "Olá";
console.log(typeof variavel); // Saída: string
variavel = 5;
console.log(typeof variavel); // Saída: number

//operações aritméticas: JavaScript suporta operações aritméticas como adição, subtração, multiplicação e divisão
let a = 10;
let b = 5;
console.log(a + b); // Saída: 15  //adição
console.log(a - b); // Saída: 5   //subtração
console.log(a * b); // Saída: 50  //multiplicação
console.log(a / b); // Saída: 2   //divisão
console.log(a % b); // Saída: 0   //módulo (resto da divisão)
console.log(a ** b); // Saída: 100000 //exponenciação (a elevado a b)
console.log(-a); // Saída: -10  //negação (inverte o sinal de a)