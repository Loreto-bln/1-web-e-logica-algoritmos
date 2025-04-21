
import { registrarDestino, mostrarItinerario } from './gestionViajes.js';


function agregarNuevoDestino() {
  const destino = prompt('Ingrese el nombre del destino:');
  if (!destino) return;

  const fecha = prompt('Ingrese la fecha del viaje (YYYY-MM-DD):');
  if (!fecha) return;

  const transporte = prompt('Ingrese el medio de transporte (Avión, Autobús, Tren):');
  if (!transporte) return;

  registrarDestino(destino, fecha, transporte);
}


function iniciarApp() {
  console.log('Bienvenido al Planificador de Viajes!');

  let opcion;
  do {
    opcion = prompt(
      'Seleccione una opción:\n' +
      '1. Registrar nuevo destino\n' +
      '2. Mostrar itinerario\n' +
      '3. Salir'
    );

    switch (opcion) {
      case '1':
        agregarNuevoDestino();
        break;
      case '2':
        mostrarItinerario();
        break;
      case '3':
        console.log('Gracias por usar el Planificador de Viajes!');
        break;
      default:
        console.log('Opción no válida. Por favor, intente de nuevo.');
    }
  } while (opcion !== '3');
}


iniciarApp();