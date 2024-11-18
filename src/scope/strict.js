"use strict";
pi = 3.1416;
console.log(pi);

function myFunction() {
  //"use strict"; si no se coloca acepta la asignacion de pi
  return pi = 3.1416;
}
console.log(myFunction());
