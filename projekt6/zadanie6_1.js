const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = ["Karolina", "Aleksandra", "Klaudia", "Sylwia", "Anastazja", "Angelika", "Ania"];


const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    console.log(index);
    div.innerText = `Najfajniejsze imię to ${names[index]}`
};

btn.addEventListener("click", nameGenerator)