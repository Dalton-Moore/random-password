const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



let lengthValue = document.getElementById("lengthValue");



bigBtn.addEventListener("input", function() {
    paswordLength = parseInt(bigBtn.value);
    lengthValue.textContent = passwordLength;
});










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



