const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Middleware para parsear JSON
app.use(express.json());

// Ruta para procesar el texto
app.post('/process-text', (req, res) => {
    const { text } = req.body;
    const processedText = `${text} ha pasado por el servidor`;

    res.json({ message: processedText });
});

// Servir archivos estáticos (nuestro HTML) desde la carpeta 'public'
app.use(express.static('public'));
