function suma(num1, num2) {
    return num1 + num2;
  }
  
document.write(suma(5, 10)); // imprime 15 

document.write("<br>")

function saludar(name = 'amigo') {
    document.write(`Hola ${name}!`);
  }
  
  saludar(); // imprime "Hola amigo" en la consola
  saludar('Juan'); // imprime "Hola Juan" en la consola
  