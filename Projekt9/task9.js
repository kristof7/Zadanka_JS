const slideList = [{
    img: "images/img1.jpg",
    text: 'First text'
},{
    img: "images/img2.jpg",
    text: 'Second text'
},{
    img: "images/img3.jpg",
    text: 'Third text'
}]

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
}

setInterval(changeSlide, time)