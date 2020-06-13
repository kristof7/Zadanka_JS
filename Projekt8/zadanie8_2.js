const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

const addLetter = () => {
}

addLetter(); 

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);