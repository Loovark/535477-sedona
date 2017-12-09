var link = document.querySelector(".open-search");
var popup = document.querySelector(".search");
var form = document.querySelector(".search-form");
var guests = document.querySelector(".guests-number");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("toggler-content-off");
});

form.addEventListener("submit", function(evt) {
    if (!guests.value) {
        evt.preventDefault();
        console.log("Нужно ввести количество гостей");
    } else {
        localStorage.setItem(guests.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.toggle("toggler-content-off"));
    }
});
