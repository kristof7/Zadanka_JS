const square = document.createElement("div");
document.body.appendChild(square);
let size = 100;
square.style.width = size;
square.style.height = size;
square.style.backgroundColor = "black";
square.style.position = "fixed";
square.style.top = "50%";
square.style.left = "50%";
square.style.transform = "translate(-50%, -50%)";

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop && size > 50 ){
    square.style.width = `${(size -= 2) -2}px`;
    square.style.height = `${size -= 2}px`;
    console.log("width= "+ square.style.width);
    console.log("hight= "+ square.style.height);
   } else if (!(st > lastScrollTop) && size < 400) {
    square.style.width = `${size += 2}px`;
    square.style.height = `${(size += 2) -2}px`;
    console.log("width= "+ square.style.width);
    console.log("hight= "+ square.style.height);
   }
   lastScrollTop = st <= 0 ? 0 : st;
});