let Alumno = {
    nombre: "",
    apellidos: "",
    edad: 0,
    materias: [],
    calificaciones: [],
    inscribirMateria: function(materia) {
        this.materias.push(materia);
    },
    asignarCalificacion: function(calificacion) {
        this.calificaciones.push(calificacion);
    }
};
function altaAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno:");
    let apellidos = prompt("Ingrese los apellidos del alumno:");
    let edad = prompt("Ingrese la edad del alumno:");
    let estudiante = Object.create(Alumno);
    estudiante.nombre = nombre;
    estudiante.apellidos = apellidos;
    estudiante.edad = edad;
    console.log(estudiante);
}
estudiante.inscribirMateria("Matemáticas");
estudiante.asignarCalificacion(9);
let grupos = {
    "Matemáticas": [estudiante1, estudiante2, estudiante3],
    "Física": [estudiante4, estudiante5]
};
function buscarPorNombre(nombre) {
    for (let materia in grupos) {
        for (let i = 0; i < grupos[materia].length; i++) {
            if (grupos[materia][i].nombre === nombre) {
                return grupos[materia][i];
            }
        }
    }
    return null;
}
