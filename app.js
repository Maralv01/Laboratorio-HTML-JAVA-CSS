const pantalla = document.getElementById("contador");
const btnRestar = document.getElementById("btnRestar");
const btnSumar = document.getElementById("btnSumar");

let cuenta = 0;


function actualizarPantalla() {
  pantalla.innerText = cuenta;
  
 
  if (cuenta >= 10) {
    pantalla.style.color = "red";
  } else {
    pantalla.style.color = "black";
  }
}

btnSumar.addEventListener("click", function () {
  cuenta = cuenta + 1;
  actualizarPantalla();
});

btnRestar.addEventListener("click", function () {
  cuenta = cuenta - 1;
  actualizarPantalla();
});




