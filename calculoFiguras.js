//Funsiones para el Cuadrado

function calcularPerimetroCuadrado(){

    const input = document.getElementById(inputCuadrado);
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    
    const input = document.getElementById(inputCuadrado);
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

//FUNCIONES DE CALCULO
function perimetroCudrado(lado){
    return lado *4;
}

function areaCuadrado(lado){
    return lado * lado;

}