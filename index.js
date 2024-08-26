const formEl = document.querySelector("form");
const inputEl = document.querySelector(".input");
const pEl = document.querySelector("p");
const radioCelsiusEl = document.querySelector("#celsius");
const fahrenheitCelsiusEl = document.querySelector("#fahrenheit");
let temp;

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!inputEl.value) return;

    if(radioCelsiusEl.checked) {
        temp = (Number(inputEl.value) * 9 / 5) + 32;
        pEl.textContent = `${temp.toFixed(1)} °F`;
    }
    else if(fahrenheitCelsiusEl.checked){
        temp = (Number(inputEl.value) - 32) * 5/9;
        pEl.textContent = `${temp.toFixed(1)} °C`;
    }
    else {
        pEl.textContent = "Select a unit";
    }

})



console.log("100° celsius to fahrenhet:" ,(100 * 9/5) + 32);