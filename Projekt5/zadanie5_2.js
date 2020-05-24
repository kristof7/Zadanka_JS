const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["Krzysztof", "wiosna", "user", "123", "111", "jedEN", "DwA"];
const messages = ["Sprawdź mnie: https://github.com/kristof7", "piekna pora roku", "Witaj na mojej stronie", "..456789", "111 dalmatynczykow", "super", "działa!"];

const showMessage = (e) => {
    passwords.forEach((elem, index) => {
        if (e.target.value.toUpperCase() == elem.toUpperCase() ) {
        div.innerText = messages[index];
        e.target.value = ""; 
    }
    });
}

input.addEventListener("input", showMessage);

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
});
