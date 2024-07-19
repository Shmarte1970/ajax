// Código en Node.js para simular un botón que muestra un mensaje al ser pulsado

const readline = require("readline");

// Creamos una interfaz de lectura para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función que muestra el mensaje al pulsar el "botón"
function mostrarMensaje() {
  console.log("Hola Mundo");
  rl.close(); // Cerramos la interfaz después de mostrar el mensaje
}

// Simulamos un evento de "click" en el botón al ejecutar el script
console.log("Pulsa el botón para mostrar el mensaje...");
rl.question("Pulsa Enter para simular el clic: ", () => {
  mostrarMensaje();
});
