//Array
const destinos = [];


const registrarDestino = (destino, fecha, transporte) => {
  destinos.push({ destino, fecha, transporte });
  console.log(`Destino "${destino}" registrado.`);
};

// calcular el costo del viaje
function calcularCosto(destino, transporte) {
  let costoBase = 0;

  switch (transporte.toLowerCase()) {
    case 'avión':
      costoBase = 300;
      break;
    case 'autobús':
      costoBase = 100;
      break;
    case 'tren':
      costoBase = 150;
      break;
    default:
      console.warn(`Transporte "${transporte}" no reconocido. Costo base aplicado.`);
      costoBase = 50;
  }

  return costoBase;
}


const mostrarItinerario = () => {
  if (destinos.length === 0) {
    console.log('El itinerario está vacío.');
    return;
  }

  console.log('\n--- ITINERARIO DE VIAJES ---');
  destinos.forEach((viaje, indice) => {
    const costo = calcularCosto(viaje.destino, viaje.transporte);
    console.log(`${indice + 1}. Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${viaje.transporte}, Costo estimado: $${costo}`);
  });
  console.log('---------------------------\n');
};


export { registrarDestino, calcularCosto, mostrarItinerario, destinos };