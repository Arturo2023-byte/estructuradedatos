// 1. Crear un arreglo (array)
/* Un arreglo es una estructura que puede contener múltiples 
valores. Aquí creamos un arreglo de números.*/
let numeros = [10, 20, 30, 40, 50];  // Arreglo con 5 elementos

// 2. Imprimir el arreglo original
console.log("Arreglo original:", numeros);

// 3. Acceder a un elemento del arreglo
/*Los arreglos son indexados desde 0, es decir, 
el primer elemento tiene el índice 0.*/
console.log("Primer elemento del arreglo:", numeros[0]);  // Imprime el valor 10
console.log("Tercer elemento del arreglo:", numeros[2]);  // Imprime el valor 30

// 4. Modificar un elemento del arreglo
// Podemos cambiar el valor de un elemento del arreglo accediendo a su índice.
numeros[1] = 25;  // Cambiamos el valor en el índice 1 (segundo elemento) de 20 a 25
console.log("Arreglo después de modificar el segundo elemento:", numeros);

// 5. Agregar un elemento al final del arreglo
// Usamos el método `push` para añadir un nuevo elemento al final del arreglo.
numeros.push(60);  // Agregamos el número 60 al final del arreglo
console.log("Arreglo después de agregar un nuevo elemento:", numeros);

// 6. Eliminar el último elemento del arreglo
// Usamos el método `pop` para eliminar el último elemento del arreglo.
numeros.pop();  // Elimina el último valor (60) del arreglo
console.log("Arreglo después de eliminar el último elemento:", numeros);

// 7. Recorrer el arreglo (iterar)
// Usamos un bucle `for` para recorrer todos los elementos del arreglo e imprimirlos.
console.log("Recorriendo el arreglo:");
for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento en el índice " + i + ": " + numeros[i]);
}

// 8. Encontrar la longitud del arreglo
// El método `.length` devuelve el número de elementos que hay en el arreglo.
console.log("Longitud del arreglo:", numeros.length);
