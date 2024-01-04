class Automovil {
    constructor (modelo,cilindraje, year, color ) {
        this.modelo = modelo;
        this.cilindraje = cilindraje;
        this.year = year;
        this.color = color
    }
    acelerar() {
        console.log("El automovil",this.modelo, "de color", this.color, "esta acelerando")
    }
}

// creamos las instancias de la clase Automovil

const auto1 = new Automovil("camioneta", 1600, 2003, "rojo")

console.log(auto1)
auto1.acelerar()