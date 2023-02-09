let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales) {
    document.write(animal + "<br>")
}

for (animal of animales) {
    document.write(animal + "<br>")
}