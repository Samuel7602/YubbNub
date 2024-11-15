document.getElementById("movies-register").addEventListener("submit", function(event) {
    event.preventDefault();

    const movieName = document.getElementById("movie-name").value.trim();
    const type = document.getElementById("type").value.trim();

    if (movieName === "" || type === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const movieItem = document.createElement("p");
    movieItem.textContent = `${movieName} - Tipo: ${genre}`;

    document.getElementById("movies-list").appendChild(movieItem);

    document.getElementById("movie-name").value = "";
    document.getElementById("type").value = "";
});
