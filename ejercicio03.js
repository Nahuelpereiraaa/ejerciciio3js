function ejecutarOpcion() {

let valor = 250;

let opcion = document.getElementById("opciones").value;
let resultado = document.getElementById("resultado");
let mensaje = document.getElementById("mensaje");

mensaje.className = "";

  switch (opcion) {
    case "50":
      mensaje.textContent = "El valor 50 no esta en el rango 100-300. ";
      mensaje.classList.add("");
      break;
      case "200":
      mensaje.textContent = "⚠️ El valor 200 esta en el rango 100-300. ";
      mensaje.classList.add("");
      break;
    default:
      mensaje.textContent = "⚠️ No ha seleccionado ninguna opción";
      mensaje.classList.add("vacio");
      break;
  }
}




