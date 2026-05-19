// LOOP: estrutura de repetição

// FOR é o mais comun
// FOR( condição, incr. , incremento){}

//incremento: i, j, k, l
//condição: i < 10
//incrementador: i++ (cada loop soma 1)

//Loop que intere de 0 até 4

for (let i = 0; i <= 4; i++){
    console.log("Loop for - o i e:" + i)
}

//Arrays

//Arrays são listas
//Contém geralmente itens do mesmo tipo de dados
//lista de strings, de números...

//Arrays são zero based= sempre começam do 0
const frutas = ["Maçã", "Banana",  "laranja"]

console.log(frutas[0])


for( let i=0; i <=3; i++){
    console.log("Fruta:" + frutas[i])
}

//lista.length => quantidade de elementos

for(let i = 0; i < frutas.length; i++){
    console.log("Fruta: " + frutas[i])
}

//while: quando não se sabe quando o loop termina, não sabe a condição final

let aleatorio = 0
// console.log(Math.floor(Math.random()*10)

while( aleatorio != 10){
    aleatorio = Math.floor(Math.random()*10) + 1;
    console.log("Loop while: " + aleatorio);

}

//WHILE: quando eu não sei quando vai acabar

//DO WHILE

//do {
 //   console.log("Teste")
//} while (1 < 2);

var j = 0

//super incomun, chance de ver beira a zero 
//do{
  //  console.log("J: " + j);

    //j++
//} while (j < 10);

//soma de numeros pares 

let soma = 0;
//verificar numeros pares
for(i = 0; i <= 20; i++){

    soma +=i;
}

console.log(soma);



