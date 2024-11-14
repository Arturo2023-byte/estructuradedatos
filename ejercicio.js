class SimpleHashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Función hash para calcular un índice basado en la clave
    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Agregar o actualizar un contacto
    addContact(name, phoneNumber) {
        const index = this._hash(name);
        this.table[index] = [name, phoneNumber]; // Sobrescribe cualquier valor anterior
    }

    // Obtener el número de teléfono de un contacto
    getPhoneNumber(name) {
        const index = this._hash(name);
        return this.table[index] ? this.table[index][1] : "Contacto no encontrado";
    }

    // Eliminar un contacto
    removeContact(name) {
        const index = this._hash(name);
        if (this.table[index] && this.table[index][0] === name) {
            this.table[index] = undefined;
        }
    }
}

// Ejemplo de uso
const contacts = new SimpleHashTable(20);

// Agregar contactos
contacts.addContact("Alice", "123-456-7890");
contacts.addContact("Bob", "987-654-3210");

// Buscar contactos
console.log(contacts.getPhoneNumber("Alice"));  // 123-456-7890

// Modificar el número de un contacto
contacts.addContact("Alice", "111-222-3333");
console.log(contacts.getPhoneNumber("Alice"));  // 111-222-3333

// Eliminar un contacto
contacts.removeContact("Bob");
console.log(contacts.getPhoneNumber("Bob"));    // Contacto no encontrado
