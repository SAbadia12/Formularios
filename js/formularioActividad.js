document.getElementById("imagen").addEventListener("change", function (event) {
  let file = event.target.files[0];
  let preview = document.getElementById("previewImg");

  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
});

// attach listener to form now that it has an id
const form = document.getElementById("productoForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let categoria = document.getElementById("categoria").value.trim();
  let descripcion = document.getElementById("descripcion").value.trim();
  let imagenInput = document.getElementById("imagen");
  let imagen = document.getElementById("previewImg").src;

  if (imagenInput.files.length === 0) {
    alert("Por favor, selecciona una imagen.");
    return;
  }

  if (!nombre || !categoria || !descripcion) {
    alert("Por favor, completa todos los campos requeridos.");
    return;
  }

  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push({ nombre, categoria, descripcion, imagen });
  localStorage.setItem("productos", JSON.stringify(productos));

  alert("Producto registrado correctamente.");

  location.reload();
});
