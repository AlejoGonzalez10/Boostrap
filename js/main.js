function saludo() {
    alert("Bienvenido a mi website con Boostrap y Java Script")
}

function suma() {
    alert("Algoritmo que sumara dos valores ingresaros");
    //Declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    //Solicitamos los valores
    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));
    //Realizamos los procedimientos
    S = A + B;
    //Mostramos el resultado en pantalla
    alert("El resultado de la suma es: " + S);
}

function operaciones() {
    alert("Algoritmo que sumara, restara, multiplicara y dividira dos valores ingresados");
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;

    A = parseInt(prompt("Digite el primer valor a operar"));
    B = parseInt(prompt("Digite el segundo valor a operar"));

    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    alert ("El resultado de la suma es: " + S  + "\nEl resultado de la resta es: " + R + "\nEl resultado de la multplicación es: " + M + "\nEl resultado de la division es: " + D);
    //alert ("El resultado de la resta es: " + R);
    //alert ("El resultado de la multplicación es: " + M);
    //alert ("El resultado de la division es: " + D);
    
}

function mayor(){
    alert("Algoritmo que determinara el numero mayor de los ingresados");

    let N1 = 0;
    let N2 = 0;

    N1= parseInt(prompt("Ingrese el primer valor"));
    N2= parseInt(prompt("Ingrese el segundo valor"));

    if (N1 == N2) {
        alert("Los valores ingresados son iguales");
    }
    else if ( N1 > N2 ) {
        alert("El numero mayor es: " + N1);
    }
    else{
        alert("El numero mayor es: " + N2);
    }
}

//El colegio ABC requiere un algoritmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia y 7 calificaciones, este sistema debe indicar si aprobo o reprobo la materia teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6.

function promedio() {
    alert("Este algoritmo sacara el promedio de tu materia");
    let nombre = 0;
    nombre=prompt("Ingrese su nombre");
    let materia = 0;
    materia=prompt("Ingrese el nombre de la materia");
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let nota6 = 0;
    let nota7 = 0;
    let promedio = 0;
    nota1=parseInt(prompt("Ingrese su primer nota"));
    nota2=parseInt(prompt("Ingrese su segunda nota"));
    nota3=parseInt(prompt("Ingrese su tercer nota"));
    nota4=parseInt(prompt("Ingrese su cuarta nota"));
    nota5=parseInt(prompt("Ingrese su quinta nota"));
    nota6=parseInt(prompt("Ingrese su sexta nota"));
    nota7=parseInt(prompt("Ingrese su septima nota"));

    promedio1 = 0;
    promedio1 = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
    promedio = promedio1/7;

    if (promedio<6) {
        alert(nombre + " usted reprobo " + materia + " con un promedio de " + promedio);
    }
    else{
        alert(nombre + " Usted aprobo " + materia + " con un promedio de " + promedio)
    }
}

//Se requiere un sistema o algoritmo que al ingresar el valor en dolares, nos indique a cuantos pesos colombianos equivale, euros y soles.

function conversion () {
    alert("Algoritmo que hace la conversion de dolares a pesos colombianos, euros y soles.");
    let dolar = 0;
    dolar = parseInt(prompt("Digite el valor en dolares que desea convertir "));

    vpesos= 4118;
    veuros= 0.92;
    vsoles= 3.72;

    pesosc= vpesos * dolar;
    euros= veuros * dolar;
    soles= vsoles * dolar;

    alert("El valor en pesos colombianos es: $" + pesosc + "\nEl calor en euros es: €" + euros + "\nEl valor en soles es: S/" + soles);
}   


//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo encuenta que el banco paga un interes del 1.3 mensual

function cdt() {
    alert("Algoritmo le dira que dinero ganara con el cdt");
    let invertir= 0;
    let años= 0;
    tiempo= años*12;
// let meses=12

    invertir= parseInt(prompt("Digite el valor que desea inventir en el banco"));
    años= parseInt(prompt("Digite los años que desea dejarlo en el banco"));
     
     tiempo= años*12;
     i=0.13;
     interes= invertir * Math.pow((1+0.13/24),años*12);
     alert("El capital al final de los " + años + " años es de: " + interes);
}


function menor() {
    alert("Algoritmo que determina el numero menor de los 3 que se ingresan");
    let numero1=0;
    let numero2=0;
    let numero3=0;

    numero1=parseInt(prompt("Digite el primer numero"))
    numero2=parseInt(prompt("Digite el segundo numero"))
    numero3=parseInt(prompt("Digite el tercer numero"))

    if ((numero1==numero2)&&(numero1==numero3)) {
        alert("Los numeros ingresados son iguales");
    }
    else if ((numero1<numero2)&&(numero1<numero3)) {
        alert("El numero menor es: " + numero1)
    }
    else if ((numero2<numero1)&&(numero2<numero3)) {
        alert("El numero menor es: " + numero2)
    }
    else{
        alert("El numero menor es: " + numero3)
    }
}

function promedio2() {
    alert("Este algoritmo calculará el promedio de tu materia");

    let nombre = prompt("Ingrese su nombre");
    let materia = prompt("Ingrese el nombre de la materia");
    
    let notas = []; // Array to store the grades
    
    // Using a loop to prompt for the seven grades
    for (let i = 1; i <= 7; i++) {
        let nota = parseInt(prompt("Ingrese la nota " + i));
        notas.push(nota);
    }

    let promedioSum = 0;

    // Calculating the sum of grades
    for (let i = 0; i < notas.length; i++) {
        promedioSum += notas[i];
    }

    let promedioFinal = promedioSum / notas.length;

    if (promedioFinal>6) {
        alert(nombre + " aprobo en " + materia + " con un promedio de: " + promedioFinal.toFixed(2));
    }
    else{
        alert(nombre + " reprobo en " + materia + " con un promedio de: " + promedioFinal.toFixed(2));
    }
   
}



function circulo() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function moveTop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");
    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function horizontal() {
    const hori = document.querySelector("#figura");
    hori.classList.toggle("horizontal");
}

function vertical() {
    const verti = document.getElementById("figura");
    verti.classList.toggle("vertical")
}

function gif() {
    const gif = document.querySelector("#figura");
    gif.classList.toggle("gif");
}

function moveRight() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("rigth");
}

function moveLeft() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function moveBottom() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("bottom");
}

function degradado() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("degradado");
}

function triangulo() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("triangulo");
}

function rombo() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}