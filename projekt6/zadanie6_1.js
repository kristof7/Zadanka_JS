const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ["Karolina", "Aleksandra", "Klaudia", "Sylwia", "Anastazja", "Angelika", "Ania"];
const prefix = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy", "Szczerze uważam", "Jestem pewien", "Na 100% twierdzę"];


const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefix.length);
    div.innerText = `${prefix[indexPrefix]}, że najlepsze będzie imię ${names[index]}`
};

btn.addEventListener("click", nameGenerator)