class Rectangulo {
    // Constructor para inicializar las propiedades de ancho y alto
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    // Método para calcular el área del rectángulo
    calcularArea() {
        return this.ancho * this.alto;
    }

    // Método para calcular el perímetro del rectángulo
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}
// Crear un objeto de la clase Rectangulo con ancho 5 y alto 10
const rectangulo1 = new Rectangulo(5, 10);

// Calcular y mostrar el área
console.log("Área del rectángulo:", rectangulo1.calcularArea()); // Resultado esperado: 50

// Calcular y mostrar el perímetro
console.log("Perímetro del rectángulo:", rectangulo1.calcularPerimetro()); // Resultado esperado: 30
