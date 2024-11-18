//Variables
var a; // declarando
var b = "b"; // declaramos | asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaración

// Global scope
var fruit = "Apple";
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // cuidado de asignar sin declarar... crearía una variable local por accidente
  console.log(country);
}
countries();
console.log(country); // se puede ver desde afuera de la funtion
