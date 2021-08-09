/*let numero = [];
numero[0] = "fulano";
numero[1] = "cic lano";
console.log(numero);*/
//VETOR É DINAMICO
/*
let vetor = [10,20,30,40,50];
vetor[5] = 60;
console.log(vetor[5]);*/
/*
let vetor = [];
for(let i = 0;i <10; i++){
    vetor.push(i);  //ADICIONAR ELEMENTOs NO VETOR
    
}console.log(vetor);*/

//let vetor = [10,20,30,40,50,60,70,80,90];
/*for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}*/
/*
for(let indice of vetor){ //FOR PARA VETOR
    console.log(indice);
}*/
let matriz = [
    [1,2,3],
    [2,4,5],
    [6,7,8],
];
for (let linha of matriz){
    for (let elemento of linha){
        console.log(elemento);
    }
}
