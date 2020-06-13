const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['DZIEŃ DOBRY', 'FAJNIE, ŻE JESTEŚ :)', 'OBEJRZYJ MOJE REPOZYTORIUM NA https://github.com/kristof7']

let activeLetter = 0;
let activeWord = 0;

const addLetter = () => {

    spnText.textContent += txt[activeWord][activeLetter];
    activeLetter++;
    if (activeLetter === txt[activeWord].length) {
        activeWord++;
        if(activeWord === txt.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            spnText.textContent = "";
            addLetter();
        }, 1000);
    };
setTimeout(addLetter, 100);
}

addLetter(); 

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
