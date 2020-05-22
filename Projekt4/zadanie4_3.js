const square = document.querySelector("div");
let divx = 100;
let divy = 100;
square.style.left = divx + "px";
square.style.top = divy + "px";

let active = false;

let insertDivX;
let insertDivY;

square.addEventListener("mousedown", (e) => {
    square.style.backgroundColor = "gray";
    active = !active;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

square.addEventListener("mousemove", (e) => {
    if (active) {
        divx = e.clientX - insertDivX;
        divy = e.clientY - insertDivY;
        square.style.left = `${divx}px`;
        square.style.top = `${divy}px`;
    }
})

square.addEventListener("mouseup", (e) => {
    square.style.backgroundColor = "black";
    active = !active;
})