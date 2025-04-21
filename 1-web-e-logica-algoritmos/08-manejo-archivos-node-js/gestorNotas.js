const fs = require("fs")
const filePath = './notas.json';

let notas = [] // <--- Declaración de 'notas' fuera de la función

const crearNota = (titulo, contenido) => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8')
        notas = JSON.parse(data)
    }

    //Comprobación para que NO se agregue tarea con el mismo título
    const tituloExistente = notas.some(nota => nota.titulo === titulo);

    if (tituloExistente) {
        console.log(`Ya existe una nota con el título "${titulo}". No se agregará.`);
        return; // Salimos de la función sin agregar la nota
    }

    const nuevaNota = { titulo, contenido }
    notas.push(nuevaNota)

    fs.writeFileSync(filePath, JSON.stringify(notas))
    console.log("La nota se agregó correctamente")

}

const listarNotas = () => {
    cargarNotas(); // Cargamos las notas existentes

    if (notas.length === 0) {
        console.log('\x1b[33mNo hay notas guardadas.\x1b[0m');
        return;
    }

};

const eliminarNota = (titulo) => {
    cargarNotas(); // Cargamos las notas existentes

    
    }

crearNota("Académico", "Estudiar Node.js")
crearNota("Entrenamiento", "Estudiar Backtracking")

