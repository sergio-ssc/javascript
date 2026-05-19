// Escopo

// Escopo global
//{ } => 

    let nome = "Samwise"; // var no escopo global

    function exibirNome(){

        console.log(nome);
    }

    exibirNome()

    //Escopo local

    function exibirIdade(){
        const idade = 20;

        console.log("Sua idade é: " + idade);
    }

    exibirIdade();

    //Hoisting

    x = 10;

    console.log(x);

    var x = 5;

    console.log(x);

    //LET e CONST vão anular o hoisting de váriaveis

    function digaOi(){
        console.log("Oi")
    }

    digaOi()
