// Dato primitivo INMUTABLE

let numero = 23
numero = numero + 23

console.log(numero)


let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Datos complejo MUTABLE

let usuario = {nombre:"pepito", edad:23}
usuario.edad = 25
console.log(usuario)


let frutas = ["manzana", "pera"]
frutas[0] = "sandia"
console.log(frutas)

// con funciones

    function cambiarNombre(objeto) {
        objeto.nombre = "me cambie el nombre yujuuu"
    }

    let persona = {nombre:"antonio"}
    cambiarNombre(persona)
    console.log(persona)