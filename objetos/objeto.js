// creacion 

const persona =  {
    nombre:"Eduardo",
    apellido: "Castro",
    edad: 20,

    //metodos
    saludar() {
        console.log("Hola mi nombre es: ", persona.nombre)
    }
}

// accediendo a las propiedades del objeto Persona

console.log(persona)
persona.saludar()

// FUNCION CONSTRUCTORA (el nombre de la funcion constructora siempre empieza por mayuscula)

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
}

// crear instancias de la funcion constructora

const persona1 = new Persona("Eduardo", "Castro", 20)
const persona2 = new Persona("Tatiana", "Franco", 20)

// agregar propiedades o metodos a la funcion constructora

Persona.prototype.saludar = function() {
    console.log("Hola, yo me llamo ", this.nombre, this.apellido)
}

// llamando a los metodos y propiedades de la funcion constructora

console.log(persona1)
console.log(persona2)
persona1.saludar()
persona2.saludar()

