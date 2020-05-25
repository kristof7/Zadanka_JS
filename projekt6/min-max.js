
const numberRandom = (min, max) => {
 const number = Math.floor(Math.random() * (max - min +1) + min);
 document.querySelector(".number1").textContent = min;
 document.querySelector(".number2").textContent = max;
 return number;
}

const showNumber = numberRandom(3,17);

document.querySelector(".result").textContent = showNumber;