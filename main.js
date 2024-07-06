let time = document.getElementById("time");
let date = document.getElementById("date");

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
