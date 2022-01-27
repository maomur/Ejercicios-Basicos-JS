// EJERCICIOS BÁSICOS JS - 01


/* 
*************************************

EJERCICIO 01:

Seudo código

1. Iniciar Bucle
2. Imprimir números del 1 al 30
3. Incrementar de 3 en 3

RESULTADO:

for(let i = 1; i <= 30; i += 3){
    console.log(i);
}

***********************************************
*/



/*
***********************************************
EJERCICIO 02:

Seudo Código

1. iniciar bucle for
2. Imprimir título
3. Operación interna

console.log(`Tabla de Multiplicar del 8`);

for(let i = 1; i <= 10; i++){
    console.log(`8 x ${i} = ${i * 8}`);
}

***********************************************
*/


/*
***********************************************
EJERCICIO 03:

Seudo Código

1. Iniciar bucle for
2. Imprimir números
3. Si número es múltiplo de 2 = 0; es par
4. Si número no es múltiplo de 2 = 0; es impar


for(let i = 1; i <= 29; i++){
    if(i % 2 === 0){
        console.log(`El número ${i}, es par`)
    } else {
        console.log(`El número ${i}, es impar`)
    }
}

***********************************************
*/


/*
***********************************************
EJERCICIO 04:

Seudo código

1. Solicitar una frase
2. Iniciar contador
3. Comprobar letra = 'a'.
4. Si  letra es = 'a'; incrementar contador.
5. Imprimir Resultado.


let frase = prompt(`Escribe una frase`);

let contador = 0;

for (letra of frase) {
    if(letra === 'a'){
        contador++
    }
}

console.log(`La frase: ${frase}, tiene ${contador} letras "a"`);

***********************************************
*/


/* 
**********************************************

EJERCICIO 05

1. Imprimir números 1 al 50.
2. Si número es múltiplo de 3, mostrar la palabra "Fizz".
3. Si número es múltiplo de 5, muestra la palabra Buzz.
4. Si número es múltiplo de 3 y de 5, muestra la palabra 'FizzBuzz'.



for(let i = 1; i <= 50; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    } else if(i % 3 === 0){
        console.log(`Fizz`);
    } else if(i % 5 === 0){
        console.log(`Buzz`);
    } else {
        console.log(i)
    }

    console.log(i);
}

**********************************************
*/


/* 
**********************************************

EJERCICIO 06

1. Crear un bucle for para el primer número de la tabla de multiplicar.
2. Crear un bucle interno para iterar el segundo número de la tabla
3. Monstar el resultado.

for(let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
**********************************************
*/



/* 
**********************************************

EJERCICIO 07

Seudo Código

1. Pedir al usuario un número del 1 al 10
2. Si el número no está en el rango, volver a solicitar.
3. Si no es un número válido, volver a hacer la pregunta.


let numero;

do{
    numero = prompt(`Ingresa un número del 1 al 10`);
} while(numero < 1 || numero > 10 || isNaN(numero));

console.log(`El número ingresado: ${numero}, es correcto!`);


**********************************************
*/


/* 
**********************************************

EJERCICIO 08

Seudo código:

1. Solicitar al usuario un número entre el 50 y 100.
2. Validar si el número cumple con los requisitos.
3. Si no cumple, volver a preguntar.


let number;
do{
    number = prompt(`Ingresa un número del 50 a 100 para continuar`);
} while((number < 50 || number > 100) || isNaN(number));

console.log(`El número ingresado ${number}, es correcto`);

**********************************************
*/



/*
**********************************************

EJERCICIO 09

1. Solicitar al usuario un número del 2 al 10
2. Comprobar y repetir pregunta si no es correcto.
3. Crear un bucle for para la tabla de multiplicar de dicho número.


let elNumero;

do{
    elNumero = prompt(`Introduce un número entero entre 2 y 10`);
} while(elNumero < 2 || elNumero > 10 || isNaN(elNumero));

console.log(`El número ${elNumero}, es correcto!`);

console.log(`TABLA DE MULTIPLICAR DEL ${elNumero}`)

for(let i = 1; i <= 10; i++){

        console.log(`${i} x ${elNumero} = ${i*elNumero}`);

    }

**********************************************
*/



/*
**********************************************

EJERCICIO 10:

Seudocódigo:
1. Creamos la variable contador
2. Creamos la variable estrellas
3. Creamos un bucle while
4. Mostramos en consola el resultado de estrellas
5. Aumentamos el contador en 1
6. Aumentamos estrellas en *


let contador = 0;
let estrellas = "*";

while(contador <= 7) {
    console.log(`${estrellas}`);
    
    estrellas += "*";
    
    contador++;
    
}


**********************************************
*/
//OTRA OPCIÓN:

/*
const numEstrellas = prompt(`Cuántas estrellas quieres imprimier?`);

if(!isNaN(numEstrellas) && numEstrellas){
    for(let i = 1; i <= numEstrellas; i++){
        console.log(estrellas);
        estrellas = estrellas + '*';
    }
}


*/


/*
**********************************************

EJERCICIO 11:

let names = ["Mauricio", "Laia", "Bruna", "Grace", "Alejandro"];

for(let name of names){
    console.log(`Conozco a alguien llamado ${name}`);
    name++;
}


**********************************************
*/


/*
***********************************************

EJERCICIO 12:

let myList = [1, 9, 3, 8, 5, 7];

for(let list of myList){

    console.log(list * 2);

    list++
}

let myList = [1, 9, 3, 8, 5, 7];
for(let i = 0; i <= mylist.length; i++){
    console.log(myList[i] * 2);
}



***********************************************
*/



// EJERCICIO 13:

/*
let myNumbers = [19, -04, 14, 15, -8, 4, 3, 43, 79, 0];

console.log(`Los números seleccionados son: ${myNumbers}:`)

let positivos = 0;
let negativos = 0;
let ceros = 0;

for(let number of myNumbers){
    if(number < 0){
        negativos++
    } else if (number > 0){
        positivos++
    } else{
        ceros++
    }
}
console.log(`Total de números positivos = ${positivos}`);
console.log(`Total de números negativos = ${negativos}`);
console.log(`Total de números cero = ${ceros}`);

*/

/*
***********************************************
EJERCICIO 14:
1. Solicitar un número entre 1 y 100
2. Validar número ingresado
3. Comprobar si es mayor o menor. o si lo ha adivinado e imprimirlo
4. Hay solo 6 intentos (bucle)

let userNumber = Number(prompt(`Adivina un número secreto entre 1 y 100.`));

let systemNumber = Math.floor((Math.random() * 100) + 1);


let contador = 6;

while(contador >= 1){

    if(systemNumber > userNumber && contador > 1){
        console.log(`Incorrecto, el número ingresado ${userNumber} es menor`);
        contador--;
        console.log(`Te quedan ${contador} intentos`);
        userNumber = Number(prompt(`Adivina un número secreto entre 1 y 100.`));

    } else if(systemNumber < userNumber && contador > 1){
        console.log(`Incorrecto, el número ingresado ${userNumber} es mayor`);
        contador--;
        console.log(`Te quedan ${contador} intentos`);
        userNumber = Number(prompt(`Adivina un número secreto entre 1 y 100.`));

    } else if (systemNumber === userNumber){
        console.log(`Felicitaciones, has adivinado el número secreto!`);
        break;
    } else {
        console.log('Se han acabado tus intentos!!');
        break;
    }
}

console.log(`EL NÚMERO SECRETO ERA: ${systemNumber}`);


*/




