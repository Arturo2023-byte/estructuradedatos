class Persona {
    // Constructor para inicializar las propiedades nombre y edad
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar los datos y verificar si es mayor de edad
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        
        // Verificar si es mayor de edad
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }
}
// Crear un objeto de la clase Persona con nombre "Juan" y edad 20
const persona1 = new Persona("Juan", 20);

// Llamar al método mostrarDatos para imprimir los datos y verificar si es mayor de edad
persona1.mostrarDatos();
