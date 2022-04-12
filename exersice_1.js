
//dado un numero imprimir sus antesesores el ultimo si coma
function nums(num){
    var lista = []; 

    while (num > 0){
        //asi se agrega contenido a una lista.
        lista = lista +[num +", "]; 
        num = num -1; 
    }
    lista = lista +[num]
    return lista; 
}

console.log(nums(10)); 
