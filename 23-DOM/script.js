
//Buscando informacion de html por medio de querySelector;
let parrafo_uno_etiqueta = document.querySelector('p');
let parrafo_uno_clase = document.querySelector(".p_class");
let parrafo_uno_id = document.querySelector("#p_id");

// console.log(parrafo_uno_etiqueta);
// console.log(parrafo_uno_clase);
// console.log(parrafo_uno_id);

let parrafo_dos_etiqueta = document.getElementsByTagName("p");
let parrafo_dos_clase = document.getElementsByClassName(".p_class2");
let parrafo_dos_id = document.getElementById("#p_id2");

randomNumber = () => {
    let numero = Math.random();
    let numeroRandom = document.querySelector("#pid4")
    numeroRandom.innerHTML = numero
}

