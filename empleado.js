class Empleado {
    // Constructor para inicializar las propiedades nombre, salario y puesto
    constructor(nombre, salario, puesto) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    // Método para incrementar el salario en un porcentaje dado
    incrementarSalario(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
    }

    // Método para mostrar la información del empleado
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salario: $${this.salario.toFixed(2)}`);
        console.log(`Puesto: ${this.puesto}`);
    }
}
// Crear un objeto de la clase Empleado con nombre "Carlos", salario 50000, y puesto "Desarrollador"
const empleado1 = new Empleado("Carlos", 50000, "Desarrollador");

// Mostrar la información inicial
empleado1.mostrarInformacion();

// Incrementar el salario en un 10%
empleado1.incrementarSalario(10);

// Mostrar la información actualizada después del incremento
empleado1.mostrarInformacion();
