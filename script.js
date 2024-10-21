///////////////////////////// CAMBIO PANTALLAS ///////////////////////////////////
// primer a segon
document.querySelector('#pform').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreInput = document.querySelector('#pform input[placeholder="Nom *"]');
    const apellidoInput = document.querySelector('#pform input[placeholder="Llinatge *"]');
    const errorMessageNom = document.getElementById('error-message-nom');
    const errorMessageLlin = document.getElementById('error-message-llin');

    let valid = true;

    // Ocultar mensajes de error al inicio
    errorMessageNom.style.display = 'none';
    errorMessageLlin.style.display = 'none';

    // Validar que "Nombre" sea el valor correcto
    if ((nombreInput.value.trim() !== "Paula") && (nombreInput.value.trim() !== "Jaume")) {
        nombreInput.classList.add('input-error');
        errorMessageNom.style.display = 'block';
        valid = false;
    } else {
        nombreInput.classList.remove('input-error');
    }

    // Validar que "Apellido" sea el valor correcto
    if ((apellidoInput.value.trim() !== "Huguet") && (apellidoInput.value.trim() !== "Ribas")) {
        apellidoInput.classList.add('input-error');
        errorMessageLlin.style.display = 'block';
        valid = false;
    } else {
        apellidoInput.classList.remove('input-error');
    }

    // Solo proceder si los valores son correctos
    if (valid) {
        document.getElementById('primer').classList.add('hidden');
        document.getElementById('segon').classList.remove('hidden');
        resetFirstForm();
    }
});

// segon a primer
document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('segon').classList.add('hidden');
    document.getElementById('primer').classList.remove('hidden');

    resetSecondForm();
});

// segon a tercer
document.getElementById('cont').addEventListener('click', function (event) {
    event.preventDefault();

    const numberInput = document.querySelector('#mesos');
    const errorMessageMes = document.getElementById('error-message-mes');

    let valid = true;

    errorMessageMes.style.display = 'none';

    // Validar que el número sea 12
    if (numberInput.value.trim() !== "12") {
        numberInput.classList.add('input-error');
        errorMessageMes.style.display = 'block';
        valid = false;
    } else {
        numberInput.classList.remove('input-error');
    }

    // Solo proceder si el valor es correcto
    if (valid) {
        document.getElementById('segon').classList.add('hidden');
        document.getElementById('tercer').classList.remove('hidden');
        document.body.style.backgroundColor = "#56070c";
        resetSecondForm();
    }
});

// tercer a primer
document.getElementById('tornar-inici').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('tercer').classList.add('hidden');
    document.getElementById('primer').classList.remove('hidden');
    document.body.style.backgroundColor = "";
});

// Limpiar inputs y deshabilitar botón en el primer formulario
function resetFirstForm() {
    const inputs = document.querySelectorAll('#pform input');
    inputs.forEach(input => {
        input.value = ''; // Limpiar los inputs
    });
    document.querySelector('#pform .btn').disabled = true; // Deshabilitar el botón
}

// Limpiar inputs y deshabilitar botón en el segundo formulario
function resetSecondForm() {
    const numberInput = document.querySelector('#mesos');
    const checkboxInput = document.querySelector('#est');

    numberInput.value = ''; // Limpiar el número de meses
    checkboxInput.checked = false; // Desmarcar el checkbox
    document.querySelector('#sform .btn').disabled = true; // Deshabilitar el botón
}

///////////////////////////// MIRAR IMPUTS ////////////////////////////////////////

// inputs primera pantalla
const inputs = document.querySelectorAll('#pform input');
const submitButton = document.querySelector('#pform .btn');

function checkImputs() {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

    submitButton.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener('input', checkImputs);
});

checkImputs();


// inputs segona pantalla
const numberInput = document.querySelector('#mesos'); // Input del número de meses
const checkboxInput = document.querySelector('#est');  // Checkbox de "M'estimes?"
const contButton = document.querySelector('#sform .btn'); // Botón de continuar

function checkImputs2() {
    // Verificar que el campo de número no esté vacío y que el checkbox esté marcado
    const isNumberFilled = numberInput.value.trim() !== '';
    const isCheckboxChecked = checkboxInput.checked;

    // Habilitar el botón si ambos están correctos
    contButton.disabled = !(isNumberFilled && isCheckboxChecked);
}

// Agregar eventos para verificar cambios en el input del número y el checkbox
numberInput.addEventListener('input', checkImputs2);
checkboxInput.addEventListener('change', checkImputs2);

// Verificar el estado inicial
checkImputs2();

// Eliminar la clase de error cuando el usuario empiece a escribir un nuevo valor
inputs.forEach(input => {
    input.addEventListener('input', function () {
        input.classList.remove('input-error');
    });
});

// También para el input tipo number
numberInput.addEventListener('input', function () {
    numberInput.classList.remove('input-error');
});


////////////////////// BARRA ///////////////////////////
// Obtener el input range y el párrafo donde se mostrará el texto
const barra = document.getElementById('barra');
const textoDinamico = document.getElementById('texto-dinamico');
const fotoDinamica = document.getElementById('foto-dinamica');
const videoDinamico = document.getElementById('video-dinamico');

// Evento que se dispara cuando se mueve la barra de rango
barra.addEventListener('input', function () {
    // Obtener el valor actual de la barra
    const valor = barra.value;

    // Actualizar el texto dinámico en función del valor de la barra
    if (valor == 0) {
        textoDinamico.textContent = "1 ANY";
    } else {
        textoDinamico.textContent = valor;
    }

    // Actualizar la foto dinámica en función del valor de la barra
    if (valor == 4) {
        fotoDinamica.style.display = 'none';
        videoDinamico.style.display = 'block';
        videoDinamico.play();
    } else {
        videoDinamico.style.display = 'none';
        fotoDinamica.src = "12mesos/" + valor + ".JPG";
        fotoDinamica.style.display = 'block';
    }
});


////////////////////////// FONDO DE CORAZONES /////////////////////////////
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posición aleatoria en la pantalla
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';

    // Tamaño aleatorio
    const size = Math.random() * 20 + 20 + 'px'; // Entre 20px y 40px
    heart.style.width = size;
    heart.style.height = size;

    // Rotación aleatoria
    const rotation = Math.random() * 360 + 'deg';
    heart.style.transform = `rotate(${rotation})`;

    // Añadir el corazón al contenedor
    heartContainer.appendChild(heart);

    // Eliminar el corazón después de que termine su ciclo
    setTimeout(() => {
        heart.remove();
    }, 5000); // Ajusta el tiempo para coincidir con la duración de la animación
}

// Crear corazones cada 300ms
setInterval(createHeart, 300);
