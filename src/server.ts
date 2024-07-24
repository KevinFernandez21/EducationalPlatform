import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'https://educational-platform-7iadmkhae-kevin-fernandezs-projects.vercel.app', // Reemplaza esto con el dominio de tu aplicación en Vercel
  methods: 'GET,POST', // Métodos permitidos
  allowedHeaders: 'Content-Type', // Encabezados permitidos
}));

app.use(bodyParser.json());

app.post('/plot', (req, res) => {
    const { function: func } = req.body;

  // Generar valores x
  const x_vals = Array.from({ length: 100 }, (_, i) => i - 50); // Ejemplo de valores x

    let y_vals;
    try {
        y_vals = x_vals.map(x => eval(func.replace(/x/g, x))); // Evalúa la función para cada valor de x
    } catch (error) {
        return res.status(400).json({ error: 'Error al evaluar la función' });
    }

  const latex = func; // Esto debería convertir la función a formato LaTeX si es necesario

    res.json({ x_vals, y_vals, latex });
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});