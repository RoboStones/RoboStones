    // Mostrar el botón de regresar
    function showBackButton(event) {
        const backButton = document.getElementById('backButton');
        backButton.classList.remove('hidden');
    }

    // Ocultar el botón de regresar
    function hideBackButton() {
        const backButton = document.getElementById('backButton');
        backButton.classList.add('hidden');
    }
