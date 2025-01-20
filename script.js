document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crea un objeto con los datos
    const data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Envía los datos utilizando fetch
    fetch('/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Formulario enviado con éxito!');
        // Aquí puedes manejar la respuesta del servidor si es necesario
    })
    .catch((error) => {
        alert('Error al enviar el formulario: ' + error);
    });
});

// Evita el envío del formulario por defecto

// Obtén los valores del formulario
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const mensaje = document.getElementById('mensaje').value;

// Imprime los datos en la consola
console.log('Nombre:', nombre);
console.log('Email:', email);
console.log('Asunto:', asunto);
console.log('Mensaje:', mensaje);

alert('Datos enviados a la consola!');