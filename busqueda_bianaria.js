//Algoritmo burbuja para ordenar el array ya un requerimiento del algoritmo busqueda binaria dice que el arreglo o lista debe estar ordenada

function buscar(lista,nBus){
    let aux = 0; 

    for(let i = 0; i < lista.length -1; i++){
        for(let j = 0; j < lista.length -1; j++){

            if(lista[j]> lista[j+1]){
                aux = lista[j]; 
                lista[j] = lista[j+1];
                lista[j +1] = aux; 

            }

        }

    }

    let aP1 = 0;
    let aP2 = lista.length -1; 
    let r = 0; 
    let aPM = 0; 
    let bandera = false; 
    //return lista;

    while(aP1<= aP2){
        r = (aP1+aP2);
        //~~ es para hacer una divicion entera lo que hace es covertir de floatante a int.
        aPM = ~~(r/2); 

        if(nBus == lista[aPM]){
            return "Numero encontrado el la pocicion # " + aPM; 
            bandera = true; 


        }
        if(nBus > lista[aPM]){
            aP1 = aP1 +1; 
        }
        if(nBus < lista[aPM]){
            aP2 = aP2 -1;
        }


    }
    if(bandera == false){
        return "El numero no se encuentra"

    }


}

console.log(buscar([5,2,8,5,9,0] , 10))