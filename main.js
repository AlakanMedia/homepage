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
