// Paso 1: Crear una tienda con un array de productos

// Primero, necesitamos un arreglo para almacenar los productos

let tienda = [];

// Paso 2: Función para agregar un nuevo producto a la tienda
function agregarProducto(nombre, precio, cantidad) {
    // Crear un nuevo objeto de producto
    let producto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    };
    
    // Agregar el producto al array de tienda:

    /* Vamos a definir una función que tome los detalles del  producto: 
    (nombre, precio y cantidad) y los agregue al array tienda. */

    tienda.push(producto);
  }
  // Paso numero 3, encontrar el producto por su nombre dentro del array 

  // Función para actualizar la cantidad de un producto existente
function actualizarCantidad(nombre, nuevaCantidad) {
    // Buscar el producto en el array
    for (let i = 0; i < tienda.length; i++) {
      if (tienda[i].nombre === nombre) {
        tienda[i].cantidad = nuevaCantidad;
        return; // Salir de la función una vez que se actualiza la cantidad
      }
    }
    console.log("Producto no encontrado.");
  }
  
  // Paso 4: debemos crear una funcion  para mostrar la informacion de todos los productos

  // Vamos a recorrer el array Tienda e imprimir la informacion de cada producto

  // Función para mostrar todos los productos en la tienda
function mostrarProductos() {
    console.log("Inventario de productos:");
    for (let i = 0; i < tienda.length; i++) {
      console.log(`Nombre: ${tienda[i].nombre}, Precio: $${tienda[i].precio}, Cantidad: ${tienda[i].cantidad}`);
    }
  }
  
  // Paso 5: Prueba de las funciones

     /* Finalmente, como ultimo paso vamos a probar las funciones agregando productos,
          actualizando su cantidad y mostrando el inventario :V            */

        // Agrega productos a la tienda
agregarProducto("Manzana", 0.5, 100);
agregarProducto("Banana", 0.3, 150);
agregarProducto("Naranja", 0.7, 80);

// Mostracion de los productos
mostrarProductos();

// Actualizacion de la cantidad de un producto
actualizarCantidad("Banana", 200);

// Muestra de los productos después de actualizar
mostrarProductos();
  