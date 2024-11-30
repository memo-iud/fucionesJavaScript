const contenedor = document.getElementById("contenedorFormulario");

contenedor.innerHTML = `
<div class="interCambio-container">
    <h2>Intercambiar Números</h2>
    <form onsubmit="event.preventDefault(); intercambiar();">
        <label for="numA">Número A:</label>
        <input type="number" id="numA" required>
        <label for="numB">Número B:</label>
        <input type="number" id="numB" required>
        <button type="submit">Intercambiar</button>
        <button type="button" onclick="limpiarResultado()">Limpiar</button>
    </form>
    <div id="resultado" style="margin-top: 20px; font-weight: bold;"></div>
    </div>`;

function intercambiar() {
    const numA = document.getElementById("numA").value;
    const numB = document.getElementById("numB").value;  
    document.getElementById("resultado").innerText = `Antes: A= ${numA}, B= ${numB} | Después: A= ${numB}, B= ${numA}`;
}
function limpiarResultado() {
    const resultadoDiv = document.getElementById("resultado");
    const inputNumero = document.getElementById("numero");
    
    if (resultadoDiv) {
        resultadoDiv.innerText = "";
        resultadoDiv.classList.remove('mostrar-resultado');
    }
    
    if (inputNumero) {
        inputNumero.value = "";
    }
    // Limpiar todos los inputs del formulario
    const formulario = document.querySelector('.interCambio-container form');
    if (formulario) {
        formulario.reset(); // Esto limpiará todos los campos del formulario
        
        // También podemos limpiar específicamente el input de número
        const inputNumero = document.getElementById("numero");
        if (inputNumero) {
            inputNumero.value = "";
        }
    }
}

