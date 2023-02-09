class Animal{
    constructor() {
        this.brain = true
        this.legs = 0 
    }
}
class Human extends Animal{
    constructor() {
        super().legs = 2
    }
}
class Pet extends Animal{
    constructor() {
        super().legs =  4
        this.fleas = 0
    }
}
class Dog extends Pet{
    constructor() {
        super().fleas = 8 
        super().legs = 4
    }
}
class Cat extends Pet{
    constructor() {
        super().fleas = 4 
        super().legs = 4    
    } 
    bath(){
        this.fleas = 0
    }
    mess(){
        this.fleas = 5  
    }
}