let size = 10;

const init = () => {
    const button = document.createElement("button");
    const reset = document.createElement("button");
    button.innerText = "Dodaj 10 elementów listy";
    reset.innerText = "Reset";
    document.body.appendChild(button);
    document.body.appendChild(reset);
    const ulList = document.createElement("ul");
    ulList.style.listStyle = "none";
    document.body.appendChild(ulList);
    button.addEventListener("click", createLiElements); 
    reset.addEventListener("click", cleanList); 
};

const cleanList = () => {
    document.querySelector("ul").textContent = "";
    size = 10;
    i = 1;
};

let i = 1;
const createLiElements = () => {
    let liListAll = document.querySelectorAll("li");
    for (; i <= liListAll.length + 10 ; i++) {
    const liList = document.createElement("li");
    document.querySelector("ul").appendChild(liList);
    liList.innerText = `Element nr ${i}`;
    liList.style.fontSize = `${size++}px`;
}
};

init();