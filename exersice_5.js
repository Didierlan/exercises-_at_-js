/*
Realizar la suma de dos numero y mostrar el resulatado,"condicion" 
el usuario decide cuando dejar de sumar
*/

let opcion = 1; 
while(opcion != 0){
    let num1 = Number(prompt("Ingrese un numero: "));
    let num2 = Number(prompt("Ingrese un numero: "));
    let r = num1 + num2; 
    console.log(typeof(r));
    console.log(r); 
    opcion = prompt("Desea continuar '1.Yes' '0.No'")

}