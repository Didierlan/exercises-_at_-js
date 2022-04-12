function becas(liName, liNum) {
    let auxNotas = 0;
    let auxNames = 0;

    for (let i = 0; i < liNum.length - 1; i++) {
        for (let j = 0; j < liNum.length - 1; j++) {
            if (liNum[j] < liNum[j + 1]) {
                auxNotas = liNum[j];
                liNum[j] = liNum[j + 1];
                liNum[j + 1] = auxNotas;
                auxNames = liName[j];
                liName[j] = liName[j + 1];
                liName[j + 1] = auxNames;
            }

        }

    }

    for (let i = 0; i < liNum.length; i++) {
        if (liNum[i] >= 8) {
            console.log(liName[i] + " con " + liNum[i] + " tiene derecho beca");
        } else {
            console.log(liName[i] + " con " + liNum[i] + " Noooooo tiene derecho beca");
        }

    }

}


let names = ["Didier", "Mabel", "David", "Andres"]
let notas = [6, 2, 9, 1]

becas(names, notas); 