
let mensaje;
const edad = 10;

if (edad >= 18) {
    mensaje = "Es mayor de edad, puede pasar"
} else {
    mensaje = "No es mayor de edad, NO puede pasar"
}

console.log(mensaje);


// Con la condicion ternaria para validaciones sencillas y rapidas
//         ESTRUCTURA
// condicion ? true : false

const edad = 20;

const mensaje = edad >= 18 ? "Es mayor de edad, puede pasar" : "Es menor de edad, NO puede pasar"

console.log(mensaje);