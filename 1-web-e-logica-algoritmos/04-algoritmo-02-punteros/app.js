const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
  let derInicio = 0;
  let izqSiguiente = 1;

  while (izqSiguiente < arr.length) {
   
    const inicialderInicio = arr[derInicio][0];
    const inicializqSiguiente = arr[izqSiguiente][0];

    if (inicialderInicio === inicializqSiguiente) {
      return [arr[derInicio], arr[izqSiguiente]];
    } else {
      derInicio++;
      izqSiguiente++;
    }
  }

  return null;
}

console.log(encontrarPareja(invitados)); // Resultado: ["Carlos", "Cecilia"]