// =======================================================
// Función para la presentar la fecha y hora
// =======================================================
const time = document.getElementById("time");
const date = document.getElementById("date");

const month_names = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let interval = setInterval(() => {
    let local_date = new Date();

    let day = local_date.getDate();
    let month = local_date.getMonth();
    let year = local_date.getFullYear();

    time.innerHTML = local_date.toLocaleTimeString();
    date.innerHTML = `${day} ${month_names[month]} ${year}`;
}, 1000);

// =======================================================
// Función para manejar el ancho de la barra de búsqueda
// =======================================================
const input = document.getElementById("search_text");
let initial_width = input.placeholder.length; 

input.style.width = initial_width + "ch";

input.addEventListener("input", function() {
    let desired_width = this.value.length;
    const max_width = 18;

    if (desired_width == 0) {
        input.placeholder = "type...";
        desired_width = initial_width;
    }

    if (desired_width > max_width) {
        desired_width = max_width;
    }

    this.style.width = desired_width + "ch";
});

// =======================================================
// Función para manejar los atajos de teclado
// =======================================================
const search_bar = document.getElementById("search_bar");
const search_engine_img = document.getElementById("search_engine_img");

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey === true) {
        event.preventDefault(); // Para que nuestros shortcuts no interfieran con los del navegador

        switch (event.key.toLowerCase()){
            case "y":
                search_engine_img.src = "assets/youtube.svg"
                search_engine_img.alt = "youtube"
                search_bar.action = "https://www.youtube.com/results?search_query="
                break;
            case "d":
                search_engine_img.src = "assets/duckduckgo.svg"
                search_engine_img.alt = "duckduckgo"
                search_bar.action = "https://www.duckduckgo.com/?q="
                break;
            case "g":
                search_engine_img.src = "assets/google.svg"
                search_engine_img.alt = "google"
                search_bar.action = "https://www.google.com/search?q="
                break;
        }
    }
});
