//CODIGO DEL CUADRADO POR CONSOLA
console.group("CUADRADO:"); //ESTO ES PARA AGRUPAR EL CODIGO

function perimetroCudrado(lado){
    return lado *4;
}

function areaCuadrado(lado){
    return lado * lado;

}
console.groupEnd(); //Esto es para finalizar la agrupación del codigo

//CODIGO DEL TRIANGULO
console.group("TRIANGULO:"); 
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;

}

function areaTriangulo(base , altura){
    return (base * altura)/2;
}
console.groupEnd();

//CODIGO PARA EL CIRCULO
console.group("CIRCULO");

//DIAMETRO
function diametroCirculo(radioCirculo){
    return radioCirculo*2
}

//PI
const PI= Math.PI;
console.log("El PI Del Circulo es: "+ PI);
//CIRCUNFERENCIA
//Para este caso llamamos a la funcion diametroCirculo dentro de nuestra funcio
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//AREA
function areaCirculo(radio){
    return (radio * radio)* PI;
}
console.groupEnd();