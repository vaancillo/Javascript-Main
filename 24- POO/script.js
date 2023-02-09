//Super clase
class Animal {
    constructor() {
        this.brain = true;
        this.legs = 0;
    }
}

//subclase, hereda de Animal
class Human extends Animal {
    constructor(nombre, apellido) {
        // super() => Animal.this (son equivalentes)
        super().legs = 2;
        this.nombre = nombre
    }
    
    tiene_cerebro() {
        return this.brain
    }
    
    presentar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
    
}

class Pet extends Animal {
    constructor() {
        super().legs = 4;
        this.fleas = 0;
    }
    
    bañar() {
        this.fleas = 0;
    }
    
    ensuciar(){
        this.fleas += 1
    }
}

class Dog extends Pet {
    constructor() {
        super().fleas = 8;
    }
}

class Cat extends Pet {
    constructor() {
        super().fleas = 4;
    }
}
