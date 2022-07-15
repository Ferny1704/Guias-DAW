function init() {
//Ingresar los datos de los números a operar
//Elemento div donde se mostrará el menú de las operaciones
var operaciones = document.getElementById('operaciones');
//Elemento div donde se mostrarán los resultados
var resultado = document.getElementById('resultado');
//Creando el contenido de la página
var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click
for(var i=0; i<opciones.length; i++){
switch(i){
case 0:
//Función sumar
opciones[i].onclick = function(){
var op1 = prompt('Introduzca el numero de metros que desea converitr:','');
resultado.innerHTML = "<p class=\"letterpress\">" + op1 * 3.281 + "</p>\n";
}
break;
case 1:
    opciones[i].onclick = function(){
        var op1 = prompt('Introduzca el numero de metros que desea converitr:','');
        resultado.innerHTML = "<p class=\"letterpress\">" + op1 * 39.37 + "</p>\n";
        }
break;
case 2:
    opciones[i].onclick = function(){
        var op1 = prompt('Introduzca el numero de metros que desea converitr:','');
        resultado.innerHTML = "<p class=\"letterpress\">" + op1 * 1.094 + "</p>\n";
        }
break;

}
}
}
window.onload = init;