// pasar funciones como argumento =---  Callback
function a(){}
function b(a){}
b(a)

// retornar funciones
function a(){function b(){}
    return b
}

// Asignar funciones a variables----- Expresion de funciones

const a = function(){}

// tener propiedades y metodos    
function a(){}
const obj = {}
a.call(obj)

// anidar funciones------Nested funcions

function a() {
  function b(){
    function c(){

    }
    c()
  }
   b()
}
a()


// Es posible almacenar funciones en objetos

const rocket = {
    name:'Falcon 9',
    launchMessage:function launchMessage(){
        console.log('🚀 launching')}
    }
rocket.launchMessage() 