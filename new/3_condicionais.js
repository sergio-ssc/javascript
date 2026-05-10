//IF

//Decisoes ao longo do codigo
// if(condicao){
//     //codigo a ser executado caso a condicao seja verdadeira
// }

//Exemplo

const hora = 16;

if(hora < 12){     //Se o IF for falso o código não executa, ou seja, não imprime "Bom Dia!"
    console.log("Bom Dia!");
} else{
    console.log("Boa Tarde!");
}

//IF ELSE IF

// if(condicao1){  
//     //codigo a ser executado caso a condicao1 seja verdadeira
// } else if(condicao2){
//     //codigo a ser executado caso a condicao2 seja verdadeira
// } else {
//     //codigo a ser executado caso nenhuma das condicoes seja verdadeira
// }

const velocidade = 20;

if (velocidade < 30){
    console.log("Sua velocidade é muito baixa, considere acelerar.");
} else if (velocidade >= 30 && velocidade <= 60){
    console.log("Sua velocidade está adequada.");
} else {
    console.log("Velocidade acima do permitido! Reduza a velocidade.");
}

//Switch

//Ele é usado para analisar casos específicos, onde cada caso é comparado com o valor da expressão fornecida. Ele é uma alternativa ao uso de múltiplos if-else quando se tem várias condições a serem verificadas.

// switch(expressao){
//     case valor1:
//         //codigo a ser executado caso a expressao seja igual a valor1
//         break;
//     case valor2:
//         //codigo a ser executado caso a expressao seja igual a valor2
//         break;
//     default:
//         //codigo a ser executado caso a expressao nao seja igual a nenhum dos valores anteriores
// }

//IF = geralmente com intervalos de valores
//Swith = geralmente com casos específicos

const diaSemana = 8;

switch(diaSemana){
    case 1:
        console.log("Hoje é segunda-feira.");
        break;
    case 2:
        console.log("Hoje é terça-feira.");
        break;
    case 3:
        console.log("Hoje é quarta-feira.");
        break;
    case 4:
        console.log("Hoje é quinta-feira.");
        break;
    case 5:
        console.log("Hoje é sexta-feira.");
        break;
    case 6:
        console.log("Hoje é sábado.");
        break;
    case 7:
        console.log("Hoje é domingo.");
        break;
    default:
        console.log("Dia da semana inválido.");
}

//Operadores Lógicos

// && (AND) - Retorna true se ambas as condições forem verdadeiras
// || (OR) - Retorna true se pelo menos uma das condições for verdadeira
// ! (NOT) - Inverte o valor lógico de uma condição

//ex1 && ex2 -> true se ex1 e ex2 forem verdadeiras
//ex1 || ex2 -> true se ex1 ou ex2 forem verdadeiras e false se ambas forem false
//!ex1 -> true se ex1 for falsa e false se ex1 for verdadeira

const adulto = 18;
const temID = true;

if(adulto >= 18 && temID){
    console.log("Vocé é maior de idade e tem identificação. Pode entrar na festa.");
} else {
    console.log("Você não atende aos requisitos para entrar na festa.");
}

//Exemplo de uso do operador OR
//Cadastro de usuário no sistema usando email ou número de telefone

const email = false;
const telefone = false;

if( email || telefone){
    console.log("Cadastro realizado com sucesso.");
} else {
    console.log("Você não pode realizar o cadastro.");
}

