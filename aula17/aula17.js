let amigo ={
    nome: 'José',
    sexo: 'Masculino',
    peso: '70kg',
    engorda(p = 0){
        console.log(`Engordou ${p}kg`)
        this.peso += p
    }
    }

amigo.engorda(2)
console.log(`O nome da pessoa é ${amigo.nome} seu sexo é ${amigo.sexo} e pesa ${amigo.peso}`)