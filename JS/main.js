function cargarScript(ruta) {
// Limpiar scripts anteriores
    const scriptsAnteriores = document.querySelectorAll('script[data-dinamico]');
    scriptsAnteriores.forEach(script => script.remove());

// Limpiar el contenedor
    const contenedor = document.getElementById('contenedorFormulario');
    if (contenedor) {
        contenedor.innerHTML = '';
    }
// Crear y cargar el nuevo script
    const script = document.createElement('script');
    script.src = ruta;
    script.setAttribute('data-dinamico', 'true');
    document.body.appendChild(script);
}

 