const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// 1. Usando filter() para obtener productos con precio menor a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosBaratos);

// 2. Usando sort() para ordenar los productos baratos alfabéticamente por nombre
const productosBaratosOrdenados = productosBaratos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});
console.log("\nProductos baratos ordenados alfabéticamente:");
console.log(productosBaratosOrdenados);

// 3. Usando map() para obtener un nuevo arreglo con solo los nombres de los productos baratos
const nombresProductosBaratos = productosBaratosOrdenados.map(producto => producto.nombre);
console.log("\nNombres de los productos baratos:");
console.log(nombresProductosBaratos);

// 4. Usando reduce() para calcular el precio total de todos los productos
const precioTotalProductos = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("\nPrecio total de todos los productos:");
console.log(precioTotalProductos);

// 5. Usando some() para verificar si al menos un producto es de la categoría "Educación"
const hayProductoEducacion = productos.some(producto => producto.categoria === "Educación");
console.log("\n¿Hay algún producto en la categoría 'Educación'?:");
console.log(hayProductoEducacion);