class Animal {
    constructor(nombre,tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

// con extends heredamos de la clase animal las propiedades y metodos, 
// para utilizarlas en la clase perro.

class Perro extends Animal {
    constructor(nombre,tipo,raza) {
        super(nombre,tipo)
        this.raza = raza;
    }
}

const numeroEntero = 3
console.log(!!numeroEntero)