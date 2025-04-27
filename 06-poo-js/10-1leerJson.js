const fs = require('fs');

// Leer el archivo JSON
const data = fs.readFileSync('06-poo-js/10-1-ejemplojson.json', 'utf8');

// Convertir el archivo JSON a un objeto JavaScript
const jsonData = JSON.parse(data);

// Mostrar los datos en la consola
console.log(jsonData);
