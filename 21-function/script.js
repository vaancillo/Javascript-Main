// function saludar(){
// let respuesta = prompt("Como fue tu dia? ");

// if (respuesta == "bien") {
//     console.log("nice")
// }
// else{
//     console.log("ok")
// }
// }
// saludar();

function suma(num1,num2){
    let resultado = num1 +  num2
    document.querySelector(".test1").textContent = resultado
};
suma(12,92);
const suma = (num1,num2)=>{
    let resultado = num1 +  num2
    document.querySelector(".test1").textContent = resultado
}
suma(12,93)
function saludar(){
    return "hola";
}

saludarArrow = () =>  "hola"
console.log("Funcion flecha", saludarArrow());



function doble(numero){
    return numero * 2
}
console.log(doble())

dobleArrow = (numero) => numero * 2;

console.log(dobleArrow(2))


function producto (precio){
    return precio *0.16
}
console.log(producto(1))

productoArrow = (precio) => precio * 0.16






























