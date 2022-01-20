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
2. 


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