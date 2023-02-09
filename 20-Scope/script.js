
let nombre = 'Jared';
let anioNacimiento = 2006, anioActual = 2022;

//variables de ambito local
function CalculaEdad(anioNacimiento, anioActual){
    let edad = anioActual - anioNacimiento;

    return edad;
}

alert(`Hola ${nombre}, tu edad es ${CalculaEdad(anioNacimiento, anioActual)}`);