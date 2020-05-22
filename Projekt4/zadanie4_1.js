
document.body.addEventListener("mousemove", (event) => {
    const text = document.querySelector("h1");
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    text.innerText = x +", " + y;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) /2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});