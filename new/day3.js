function aparecePrompt(){
    var aera = prompt("Escolha a opção: 1- Você deseja seguir com front-end ou 2- back-end.")

    console.log(aera)

    if(aera == "1"){
        let techFront = prompt(" 1- Você prefere React ou 2- Vue.")
        console.log(techFront)
    } else if (aera == "2"){
        let techBack = prompt("Escolha a opção: 1- Você prefere C# ou 2- JAVA.")
        console.log(techBack)
    } else {
        alert("Você não rspondeu uma opção válida.")
    }

    let listaTech = []

    let fullstack = prompt("Você deseja seguir se especializando em 1- Front-end ou 2- Back-end")

    let aprenderMais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1- SIM 2- NÂO")

    while (aprenderMais == 1){
        let novaTech = prompt("Me conte qual tecnologia você quer aprender.")

        listaTech.push(novaTech)

        aprenderMais = prompt(`Que legal que você quer aprender ${novaTech}. Agora sua lista está assim: ${novaTech}, . Existe mais alguma tecnologia que você quer aprender? 1-SIM ou 2-NÂO`)
    }
        alert("Bons estudos para você!")
    
}

