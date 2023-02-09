let numero = 0;

while (numero<1000) { //sentencia while
    numero ++;
    document.write(numero);
    if (numero==10){
        break; //sentencia break: sirve para darle fin al programa en caso de que se cumpla la condicion
    }
}
document.write("fin");