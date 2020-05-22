

document.body.addEventListener("mousemove", (event) => {
    const text = document.querySelector("h1");
    text.innerText = `${event.clientX}, ${event.clientY}`;

    document.body.style.backgroundColor = `rgb(${event.clientX /6.5}, ${event.clientY /3.5}, ${event.clientX / 6.5})`;
});