function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {
  const NAME = e.target.name.value;
  const GENRE = e.target.genre.value;
  const DATE = e.target.date.value;
  const IMAGE = e.target.image.value;

  let valid = true;

  // Validación de campo de nombre
  if (!NAME) {
    document.getElementById("form-name-invalid").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-name-invalid").style.visibility = "hidden";
  }

  // Validación de campo de género
  if (!GENRE) {
    document.getElementById("form-genre-invalid").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-genre-invalid").style.visibility = "hidden";
  }

  // Validación de campo de fecha
  if (!DATE) {
    document.getElementById("form-date-invalid").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-date-invalid").style.visibility = "hidden";
  }

  // Validación de campo de imagen
  if (!IMAGE) {
    document.getElementById("form-image-invalid").style.visibility = "visible";
    valid = false;
  } else {
    document.getElementById("form-image-invalid").style.visibility = "hidden";
  }

  // Prevenir envío si no es válido
  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, GENRE, DATE, IMAGE);
  }
}

function saveData(name, genre, date, image) {
  localStorage.setItem("name", name);
  localStorage.setItem("genre", genre);
  localStorage.setItem("date", date);
  localStorage.setItem("image", image);
}

// Función para mostrar los datos almacenados en LocalStorage
function showData() {
  const NAME = localStorage.getItem("name");
  document.getElementById("name").value = NAME || "";

  const GENRE = localStorage.getItem("genre");
  document.getElementById("genre").value = GENRE || "";

  const DATE = localStorage.getItem("date");
  document.getElementById("date").value = DATE || "";

  const IMAGE = localStorage.getItem("image");
  document.getElementById("image").value = IMAGE || "";
}

// Llamada inicial a las funciones
showData();
listenForValidation();