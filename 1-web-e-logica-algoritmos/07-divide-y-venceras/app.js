function findMax(arr) {
    // Caso base: Si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
      return arr[0];
    }
  
    // Divide el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); // Calculamos el punto medio (entero)
    const left = arr.slice(0, mid);       // Obtenemos la primera mitad del arreglo
    const right = arr.slice(mid);          // Obtenemos la segunda mitad del arreglo
  
    // Resuelve el problema recursivamente para ambas mitades
    const leftMax = findMax(left);   // Encontramos el máximo de la primera mitad
    const rightMax = findMax(right); // Encontramos el máximo de la segunda mitad
  
    // Combina las soluciones comparando los máximos
    return Math.max(leftMax, rightMax); // Devolvemos el mayor de los dos máximos
  }
  
  // Ejemplo de entrada
  const numerosConstantes = [3, 8, 2, 10, 5, 7];
  console.log(findMax(numerosConstantes));  // Salida esperada: 10