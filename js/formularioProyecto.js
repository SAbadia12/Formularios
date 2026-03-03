// attach listener to form now that it has an id
const form = document.getElementById("productoForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let tratamientoDatos = document.getElementById("tratamientoDatos").checked;

  if (!nombre || !mensaje) {
    alert("Por favor, completa todos los campos requeridos.");
    return;
  }

  if (!tratamientoDatos) {
    alert("Por favor, acepta el tratamiento de datos.");
    return;
  }

  let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
  proyectos.push({ nombre, mensaje, tratamientoDatos });
  localStorage.setItem("proyectos", JSON.stringify(proyectos));

  alert("Recomendación enviada con éxito.");

  location.reload();
});
