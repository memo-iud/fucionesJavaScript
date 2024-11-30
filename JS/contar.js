const contenedor = document.getElementById("contenedorFormulario");

contenedor.innerHTML = `
    <div class="contar-container">
        <h2>Contar Números</h2>
        <form onsubmit="event.preventDefault(); iniciarCuenta();">
            <label for="numero">Introduce un número hasta el cual contar:</label>
            <input type="number" id="numero" min="0" required>
            <div class="botones">
                <button type="submit">Iniciar Conteo</button>
                <button type="button" onclick="limpiarResultado()">Limpiar</button>
            </div>
        </form>
        <div id="resultado" class="resultado-contador"></div>
    </div>`;

function iniciarCuenta() {
    const numero = parseInt(document.getElementById("numero").value, 10);
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, introduce un número válido (mayor o igual a 0).");
        return;
    }
    
    let salida = "";
    for (let i = 1; i <= numero; i++) {
        salida += i + (i < numero ? ", " : "");
    }
    
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerText = salida;
        resultadoDiv.classList.add('mostrar-resultado');
    }
}

function limpiarResultado() {
    // Limpiar el resultado
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerText = "";
        resultadoDiv.classList.remove('mostrar-resultado');
    }
    
    // Limpiar todos los inputs del formulario
    const formulario = document.querySelector('.contar-container form');
    if (formulario) {
        formulario.reset(); // Esto limpiará todos los campos del formulario
        
        // También podemos limpiar específicamente el input de número
        const inputNumero = document.getElementById("numero");
        if (inputNumero) {
            inputNumero.value = "";
        }
    }
}

