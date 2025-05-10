//Función Recursiva
//Son funciones que se llaman a sí mismas. 
//Son útiles en problemas que se pueden descomponer en subproblemas 
//similares (como el cálculo de factoriales o la búsqueda en estructuras como árboles).
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1); // Se llama a sí misma
}

console.log(factorial(5));  // Resultado: 120
