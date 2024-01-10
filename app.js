
// FUNCION PARA AGREGAR VALORES
function agregar(value) {
    document.getElementById('pantalla').value += value;
}

//FUNCION PARA CALCULAR LOS VALORES
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

// FUNCION PARA BORRAR LOS VALORES
function borrar() {
    document.getElementById('pantalla').value = '';
}