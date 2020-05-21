document.body.style.height = 10000 + "vh";

const div = document.createElement("div");
document.body.appendChild(div);

let size = 0;
div.style.width = "100%";
div.style.height = size + "px";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;

let scrollUp = true;

const changeHeight = () => {

    if(size > window.innerHeight /2) {
        scrollUp = !scrollUp;
    } else if (size <=0) {
        scrollUp = true;
    }

    if (scrollUp){
    size += 10;
    div.style.backgroundColor = "green";
    } else {
    size -= 10;
    div.style.backgroundColor = "red";
    }
    div.style.height = `${size}px`; 
}

window.addEventListener("scroll", changeHeight);