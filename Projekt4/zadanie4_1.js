

document.body.addEventListener("mousemove", (event) => {
    const text = document.querySelector("h1");
    text.innerText = `${event.clientX}, ${event.clientY}`;
});