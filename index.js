






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





const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// below used to be bigBtn
let bigBtn = document.getElementById("lengthValue");

let lengthValue = document.getElementById("lengthValue");
let password1El = document.getElementById("password1El");
let password2El = document.getElementById("password2El");

let passwordLength = parseInt(bigBtn.value);

bigBtn.addEventListener("input", function() {
    passwordLength = parseInt(bigBtn.value);
    lengthValue.textContent = passwordLength;
});

function generateRandom() {
    let useSymbols = document.getElementById("symbols-el").checked;
    let useNumbers = document.getElementById("numbers-el").checked;
    
    let allCharacters = [...characters];

    if (useSymbols) {
        allCharacters = allCharacters.concat(symbols);
    }

    if (useNumbers) {
        allCharacters = allCharacters.concat(numbers);
        }
        
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        return allCharacters[randomIndex];
}

function generatePasswords() {
    password1El.textContent = ""
    password2El.textContent = ""

    for (let i = 0; i < bigBtn.value; i++) {
        password1El.textContent += generateRandom()
        password2El.textContent += generateRandom()
    }
}