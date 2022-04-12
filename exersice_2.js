/*seguir la siguiente serire numerica 1,9,25,49,?,?,
empesemos 
49 -25 = 24 , 25-9 = 16 , 9-1 = 8 
la secuencia es que por cada numero se le debe sumar 8
8+1 =9, 8+8 = 16 + 9 = 25, 16+8 = 24 + 25 = 49, 24 + 8 = 32+ 49 = 81 .......
*/

let numSerie = 1;
let valor_incrementable = 8;
let contador = 0;
let lista = [];

while (contador < 6) {
    lista = lista + [numSerie + ", "];
    numSerie += valor_incrementable;
    valor_incrementable += 8;
    contador++;

}
lista = lista + [numSerie];
console.log(lista);