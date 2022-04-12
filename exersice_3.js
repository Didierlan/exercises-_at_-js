/*
seguir la siguiente serire numerica 4, 56, 92, 144,180, 232
el ultimo numero no debe tener coma
Empesemos 56-4 = 52, 92-56 = 36, 144-92 = 52, 
Solucion 54 + 4 = 56 +36 = 92 + 52 = 144 + 36 = (180) + 52 = (232)
*/

let nSerie = 4; 
let contador = 0;
let cambio = 0; 
let lista = []; 

while(contador < 5){
    lista = lista +[nSerie + ", "]; 
    if(cambio == 0){
        nSerie += 52; 
        cambio = 1; 
        contador++; 

    }else{
        nSerie += 36; 
        cambio = 0;
        contador++; 

    }


}
lista = lista + [nSerie]; 
console.log(lista); 