let parentDiv = document.querySelector(".number-input");
const min = 5;
const max = 20;
const step = 1;
let value = 15;
let number = parentDiv.querySelector(".number");
number.innerHTML = value;

function increase() {
    if (value < max) {
        value = Math.min(value + step, max);
    }

    parentDiv.style.transform = "rotateY(20deg)";
    setTimeout(() => {
        parentDiv.style.transform = "rotateY(0deg)";
    }, 150);

    number.innerHTML = value;
}

function decrease() {
    if (value > min) {
        value = Math.max(value - step, min);
    }

    parentDiv.style.transform = "rotateY(-20deg)";
    setTimeout(() => {
        parentDiv.style.transform = "rotateY(0deg)";
    }, 150);

    number.innerHTML = value;
}

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let password1El = document.getElementById("password1El");
let password2El = document.getElementById("password2El");

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
    const passwordLength = parseInt(value);

    if (isNaN(passwordLength) || passwordLength < min || passwordLength > max) {
        alert("Please enter a valid number between 5 and 20.");
        return;
    }

    password1El.textContent = "";
    password2El.textContent = "";

    for (let i = 0; i < passwordLength; i++) {
        password1El.textContent += generateRandom();
        password2El.textContent += generateRandom();
    }
}

function copyPassword(event) {
    const password = event.target.textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    } else {
        alert("No password to copy!");
    }
}

password1El.addEventListener("click", copyPassword);
password2El.addEventListener("click", copyPassword);