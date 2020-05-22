window.addEventListener("click", (event) => {
    const color = newColor(event);
    document.body.style.backgroundColor = color;
    console.log(event.clientX + ", " + event.clientY);
});

const newColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (x % 2 === 0) {
        if (y % 2 === 0) {
            return "red";
        } else {
            return "green";
        }
    } else if (y % 2 === 0) {
        return "green"
    } else {
        return "blue";
    }
}