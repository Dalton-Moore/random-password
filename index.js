let input = document.querySelector(".number-input");
const min = input.getAttribute("min");
const max = input.getAttribute("max");
const step = Number(input.getAttribute("step") || 1);
var value = Number(input.getAttribute("value") || 0);
let number = document.querySelector(".number");
number.innerHTML = value;

function increase() {
    if(max) {
        if (value < max && value + step <= max) {
            value += step;
        }
    } else {
        value += step;
    }
    input.style.transform = "rotateY(20deg)";
    setTimeout(() => {
        input.style.transform = "rotateY(0deg)";
    }, 150);
    number.innerHTML = value
}

function decrease() {
    if(min) {
        if (value > min && value - step >= min) {
            value -= step;
        }
    } else {
        value -= step;
    }
    input.style.transform = "rotateY(-20deg)";
    setTimeout(() => {
        input.style.transform = "rotateY(0deg)";
    }, 150);
    number.innerHTML = value
}



