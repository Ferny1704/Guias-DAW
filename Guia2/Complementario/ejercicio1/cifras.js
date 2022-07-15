

let cifra = Number(prompt("Ingrese un numero")).toFixed(0);
let cifra2 = cifra.toString();

document.write("Cantidad de cifras" + cantidadcifras() + "<br>");
document.write("Cantidad de cifras impares" + cifrainpar() + "<br>");
document.write("Cantidad de cifras pares" + "<br>");
document.write("suma de cifras impares" + "<br>");
document.write("suma de cifras pares" + "<br>");
document.write("Suma de todas las cifras" + "<br>");
document.write("Cifra mayor" + "<br>");
document.write("Cifra menor" + "<br>");

function cantidadcifras() {
    return cifra2.split("").length;
}

function cifrainpar() {
    let cifrainpar = 0;

    let numero = cifra2.split("");

    for (let i = 0; i < numero.length, i++) {
        if (nummero)
    }

    return cifrainpar;
}