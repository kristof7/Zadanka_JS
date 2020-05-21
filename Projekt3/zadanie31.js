const liList = document.querySelectorAll("li");
const button = document.querySelector("button");

let fontSize = 10;

const growText = () => {
    liList.forEach((elem) => {
        if (!elem.style.display){
        elem.style.display = "block";}
        elem.style.fontSize = `${fontSize}px`;
    });
    fontSize ++;
};

button.addEventListener("click", growText);