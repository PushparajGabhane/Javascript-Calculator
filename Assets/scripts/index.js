let b1 = document.querySelector("#block1");
let b2 = document.querySelector("#block2");
let b3 = document.querySelector("#block3");
let b4 = document.querySelector("#block4");
let b5 = document.querySelector("#block5");
let b6 = document.querySelector("#block6");
let b7 = document.querySelector("#block7");
let b8 = document.querySelector("#block8");
let b9 = document.querySelector("#block9");
let b0 = document.querySelector("#block0");
let dot = document.querySelector("#dot");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display = document.querySelector("#input");
let equate = document.querySelector("#ans");
let clearAll = document.querySelector("#clr");
let del = document.querySelector("#del");

function appendInputValue(e) {
    display.value += (e.target.innerText);
};

b1.addEventListener("click", appendInputValue);
b2.addEventListener("click", appendInputValue);
b3.addEventListener("click", appendInputValue);
b4.addEventListener("click", appendInputValue);
b5.addEventListener("click", appendInputValue);
b6.addEventListener("click", appendInputValue);
b7.addEventListener("click", appendInputValue);
b8.addEventListener("click", appendInputValue);
b9.addEventListener("click", appendInputValue);
b0.addEventListener("click", appendInputValue);
dot.addEventListener("click", appendInputValue);
plus.addEventListener("click", appendInputValue);
minus.addEventListener("click", appendInputValue);
multiply.addEventListener("click", appendInputValue);
divide.addEventListener("click", appendInputValue);

equate.addEventListener("click", () => {
    display.value = eval(display.value);
});

clearAll.addEventListener("click", () => {
    display.value = "";
})

del.addEventListener("click", () => {
    display.value = (display.value).slice(0, (display.value.length) - 1);
})