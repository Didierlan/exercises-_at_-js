/*
seguir la siguiente serire numerica 99, 90, 83,78,?,?
el ultimo numero no debe tener coma
Empesemos 99-9 = 9, 90-83 = 7, 83-78 = 5, 78-3 = 75, 75-1 = 74  
Solucion solucion 9-2 =,7-2 =,5-2 =,3-2=,1
debemos restar -2 en cada posicion 
*/

let numSerie = 99; 
let menos = 9; 
let contador = 0;
let lista = []; 

while(contador < 5){
    lista = lista + [numSerie + ", "]
    numSerie -= menos; 
    menos += -2; 
    contador ++; 
}
lista = lista + [numSerie];
console.log(lista)