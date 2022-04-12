//Dada una lista de numero desordenados entregarla ordenada utilizar una fincion

function burbuja (lista){

    var aux = 0; 

    for(let i = 0; i < lista.length -1; i++){
        for(let j =0; j <lista.length -1; j++ ){
            if(lista[j] > lista[j+1]){
                aux = lista[j]; 
                lista[j] = lista[j+1]; 
                lista[j+1] = aux; 

            }

        }

    }
    return lista




}

console.log(burbuja([3,5,1,8,9,4,10]))

