const input = document.getElementById("pass");
const div = document.querySelector(".message");

const passwords = ["krzysztof", "wiosna", "user", "123", "111"];
const messages = ["Sprawdź mnie: https://github.com/kristof7", "piekna pora roku", "Witaj na mojej stronie", "..456789", "111 dalmatynczykow"];

input.addEventListener("input", (e) => {
    div.textContent = "";
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
});

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
});