// 1. Booleano (boolean)
/* Un valor booleano puede ser verdadero (true) o falso (false).
 Es útil para controlar decisiones lógicas.*/
let esMayorDeEdad = true;  // Variable booleana que indica si la persona es mayor de edad

// 2. Números enteros (int)
/* Los números enteros no tienen decimales. 
En este caso se usa para representar la edad de una persona.*/
let edad = 25;  // Variable entera que representa la edad de una persona

// 3. Números decimales (float)
/* Los números decimales tienen parte fraccionaria y 
se utilizan para representar valores como el peso.*/
let peso = 70.3;  // Variable decimal que representa el peso en kilogramos

// 4. Cadenas de texto (string)
/* Las cadenas de texto (strings) son secuencias de caracteres y 
se utilizan para almacenar nombres, mensajes, etc.*/
let nombre = "Arturo Ch";  // Variable string que representa el nombre de la persona

// Imprimir la información inicial en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Peso:", peso + " kg");
console.log("¿Es mayor de edad?", esMayorDeEdad);

// Uso de la variable booleana para una decisión lógica
if (esMayorDeEdad) {
    console.log(nombre + " es mayor de edad.");
} else {
    console.log(nombre + " es menor de edad.");
}

// Operaciones con variables numéricas
let pesoIdeal = 75.0;
let diferenciaPeso = pesoIdeal - peso;  // Cálculo de la diferencia entre el peso actual y el ideal

console.log("La diferencia con el peso ideal es:", diferenciaPeso + " kg.");

// Comparación de variables numéricas usando booleanos
let pesoEnRango = (peso >= 50.0 && peso <= 100.0);  // Evaluamos si el peso está en un rango saludable

if (pesoEnRango) {
    console.log("El peso de " + nombre + " está dentro de un rango saludable.");
} else {
    console.log("El peso de " + nombre + " no está dentro de un rango saludable.");
}

// Concatenación de cadenas (string concatenation)
let saludo = "Hola, " + nombre + "! Bienvenido.";
console.log(saludo);
