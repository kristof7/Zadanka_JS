const button = document.querySelector(".add");
const reset = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");

const advices = [];

const addAdvices = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const advice = input.value;
    if (input.value.length) {
        advices.push(advice);
        alert(`Dodano ${advice}`)
    }
};

const resetAdvices = (e) => {
    e.preventDefault();
    advices.length = 0;
};

const showAdviceFunction = () => {
    const random = Math.floor(Math.random() * advices.length);
    document.querySelector(".result").textContent = advices[random];
};

const showOptionsFunction = () => {
    alert(`Dostepne możliwości to: ${advices.join(", ")}`);
};

button.addEventListener("click", addAdvices);
reset.addEventListener("click", resetAdvices);
showAdvice.addEventListener("click", showAdviceFunction);
showOptions.addEventListener("click", showOptionsFunction);