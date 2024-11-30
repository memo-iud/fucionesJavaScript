const contenedor = document.getElementById("contenedorFormulario");

contenedor.innerHTML = `
<div class="positivoNegativoNulo-container">
    <h2>Determinar Positivo, Negativo o Nulo</h2>
    <form onsubmit="event.preventDefault(); verificarPositivoNegativo();">
        <label for="num">Introduce un número:</label>
        <input type="number" id="num" required>
        <button type="submit">Verificar</button>
        <button type="button" onclick="limpiarResultado()">Limpiar</button>
    </form>
    <div id="resultado" style="margin-top: 20px; font-weight: bold;"></div>
    </div>`;

function verificarPositivoNegativo() {
    const num = parseInt(document.getElementById("num").value, 10);
    if (num > 0) {
        document.getElementById("resultado").innerText = "El número es positivo.";
    } else if (num < 0) {
        document.getElementById("resultado").innerText = "El número es negativo.";
    } else {
        document.getElementById("resultado").innerText = "El número es nulo.";
    }
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
      const formulario = document.querySelector('.positivoNegativoNulo-container form');
      if (formulario) {
          formulario.reset(); // Esto limpiará todos los campos del formulario
          
          // También podemos limpiar específicamente el input de número
          const inputNumero = document.getElementById("numero");
          if (inputNumero) {
              inputNumero.value = "";
          }
      }
}

