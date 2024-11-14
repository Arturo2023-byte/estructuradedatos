// Pasos para crear la clase nodo:

//#1: Crear la clase Nodo

/* Se le dara dos propiedades a esta clase, "valor: almacenara el dato del nodo." */
/* siguiente: es una referencia al siguiente nodo en la lista; se inicializa como null porque cuando se crea el nodo no está conectado a ningún otro nodo. */

class Nodo {
    constructor(valor) {
      this.valor = valor; // donde se almacena el dato del nodo
      this.siguiente = null; // Donde apuntara el siguiente nodo en la lista, comienza en null o nulo
    }
  }
  
  // #2: Crear la clase ListaEnlazada
  class ListaEnlazada {
    constructor() {
      this.cabeza = null; // el primer nodo de la lista, comienza como null porque está vacía
    }
  
    // #3: metodo con el cual se agrega un nodo al final de la lista
    agregar(valor) {
      const nuevoNodo = new Nodo(valor); // Creamos un nuevo nodo con el valor dado
      if (this.cabeza === null) {
        // Si la lista está vacía, el nuevo nodo será la cabeza
        this.cabeza = nuevoNodo;
      } else {
        // Si ya hay nodos, recorrer hasta el último nodo
        let actual = this.cabeza;
        while (actual.siguiente !== null) {
          actual = actual.siguiente; // Avanza al siguiente nodo
        }
        actual.siguiente = nuevoNodo;
      }
    }
  
    // #4: Método para imprimir los valores de la lista enlazada
    imprimir() {
      let actual = this.cabeza;
      while (actual !== null) {
        console.log(actual.valor); // Imprime el valor del nodo actual
        actual = actual.siguiente; // Avanza al siguiente nodo
      }
    }
  }
  
  // #5: Crear una instancia de ListaEnlazada y agregar nodos
  const lista = new ListaEnlazada();
  lista.agregar(10);
  lista.agregar(20);
  lista.agregar(30);
  
  // #6: Imprimir la lista para ver el resultado
  lista.imprimir();
  