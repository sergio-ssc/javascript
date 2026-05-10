    //Operadores e Comparações

    console.log(10 + 5); // Saída: 15
    console.log(10 - 5); // Saída: 5

    let idade = 18;

    console.log(idade >= 18); // Saída: true
    console.log(idade < 18); // Saída: false

    if (idade >= 18){
        console.log("Você é maior de idade.")
    } else {
        console.log("Você é menor de idade e não pode dirigir.")
    }

    //Operadores lógicos: && (AND), || (OR), ! (NOT)
    let isAdult = true;
    let hasID = false;

    console.log(isAdult && hasID); // Saída: false
    console.log(isAdult || hasID); // Saída: true
    console.log(!isAdult); // Saída: false