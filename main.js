// =======================================================
// Función para la presentar la fecha y hora
// =======================================================
const time = document.getElementById("time");
const date = document.getElementById("date");

const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
];

let interval = setInterval(() => {
    let localDate = new Date();

    let day = localDate.getDate();
    let month = localDate.getMonth();
    let year = localDate.getFullYear();

    time.innerHTML = localDate.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;
}, 1000);

// =======================================================
// Función para manejar el ancho de la barra de búsqueda
// =======================================================
const input = document.getElementById("search-text");
let initialWidth = input.placeholder.length; 

input.style.width = initialWidth + "ch";

input.addEventListener("input", function() {
    let desiredWidth = this.value.length;
    const maxWidth = 18;

    if (desiredWidth == 0) {
        input.placeholder = "type...";
        desiredWidth = initialWidth;
    }

    if (desiredWidth > maxWidth) {
        desiredWidth = maxWidth;
    }

    this.style.width = desiredWidth + "ch";
});

// =======================================================
// Función para manejar los atajos de teclado
// =======================================================
const searchBar = document.getElementById("search-bar");
const searchEngineLogo = document.getElementById("search-engine-logo");

const logos = {
    d: "ph-paw-print",
    g: "ph-google-chrome-logo",
    y: "ph-youtube-logo",
};

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey === true) {
        event.preventDefault(); // Para que nuestros shortcuts no interfieran con los del navegador

        switch (event.key.toLocaleLowerCase()){
            case "d":
                searchBar.action = "https://www.duckduckgo.com/?q=";

                if (searchEngineLogo.classList.contains(logos.g)) {
                    searchEngineLogo.classList.replace(logos.g, logos.d);
                }
                else if (searchEngineLogo.classList.contains(logos.y)) {
                    searchEngineLogo.classList.replace(logos.y, logos.d);
                }

                break;
            case "g":
                searchBar.action = "https://www.google.com/search?q=";

                if (searchEngineLogo.classList.contains(logos.d)) {
                    searchEngineLogo.classList.replace(logos.d, logos.g);
                }
                else if (searchEngineLogo.classList.contains(logos.y)) {
                    searchEngineLogo.classList.replace(logos.y, logos.g);
                }

                break;
            case "y":
                searchBar.action = "https://www.youtube.com/results?search_query=";

                if (searchEngineLogo.classList.contains(logos.d)) {
                    searchEngineLogo.classList.replace(logos.d, logos.y);
                }
                else if (searchEngineLogo.classList.contains(logos.g)) {
                    searchEngineLogo.classList.replace(logos.g, logos.y);
                }

                break;
        }
    }
});
