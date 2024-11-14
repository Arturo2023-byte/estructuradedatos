// Pasos para crear la clase TablaHash:

//#1: Crear la clase TablaHash

class TablaHash {
    constructor(tamano = 50) {
      this.tabla = new Array(tamano); 
      this.tamano = tamano; 
    }
  
    // #2: Método para generar un índice hash basado en la clave
    _hash(clave) {
      let hash = 0;
      for (let i = 0; i < clave.length; i++) {
        hash += clave.charCodeAt(i); 
      }
      return hash % this.tamano; 
    }
  
    // #3: Método para agregar un par clave-valor a la tabla
    agregar(clave, valor) {
      const indice = this._hash(clave); 
      if (!this.tabla[indice]) {
        this.tabla[indice] = []; 
      }
      // Agrega el par clave-valor al índice calculado
      this.tabla[indice].push([clave, valor]);
    }
  
    // #4: metodo para obtener un valor basado en una clave
    obtener(clave) {
      const indice = this._hash(clave); 
      const itemsEnIndice = this.tabla[indice];
      if (itemsEnIndice) {
        for (let i = 0; i < itemsEnIndice.length; i++) {
          if (itemsEnIndice[i][0] === clave) {
            return itemsEnIndice[i][1]; 
            // Devuelve el valor correspondiente a la clave
          }
        }
      }
      return undefined; 
    }
  
    // #5: Se crea u metodo para imprimir todos los valores en la tabla hash
    imprimir() {
      for (let i = 0; i < this.tabla.length; i++) {
        if (this.tabla[i]) {
          console.log(`Índice ${i}:`, this.tabla[i]);
        }
      }
    }
  }
  
  // #6: Crear una instancia de TablaHash y agregar los datos
  const miTablaHash = new TablaHash();
  miTablaHash.agregar("nombre", "Juan");
  miTablaHash.agregar("edad", 30);
  miTablaHash.agregar("ciudad", "Bogotá");
  
  console.log("Valor de 'nombre':", miTablaHash.obtener("nombre"));
  miTablaHash.imprimir();
  