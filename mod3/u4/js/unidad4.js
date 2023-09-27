function cambiar_color_contenedor(nuevoColor){

    const contentButtons = document.getElementsByClassName('contentCuadrados')[0];

    contentButtons.style.backgroundColor = nuevoColor
};


function contador_caracteres(){
    const textArea = document.getElementById('textAreaEjercicio2');

    document.getElementById('contadorCaracteres').innerHTML = `El area de texto tiene ${textArea.value.length} caracteres.`
}


var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
];

const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);

var divEjercicio3 = document.getElementById('alumnosAprobadosDiv');
  
alumnosAprobados.forEach((alumno) => {
    var nuevoAlumnoDiv = document.createElement('div');
    
    nuevoAlumnoDiv.innerHTML = `${alumno.nombre} aprobo con ${alumno.nota}`

    divEjercicio3.appendChild(nuevoAlumnoDiv);
})