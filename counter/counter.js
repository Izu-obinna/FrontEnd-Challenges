//DECLARE VARIABLES
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");
const value = document.querySelector(".value");

increment.addEventListener("click", () => {
    value.textContent = Number(value.textContent) + changeBy.valueAsNumber;  
    //you can use Number(), parseInt() or + sign in front of value.textContent to covert it from string(original form) to number.
});

decrement.addEventListener("click", () => {
    value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
});

changeBy.addEventListener("change", () => {
    const changeByValue = changeBy.valueAsNumber;

    if (Number.isNaN(changeByValue)) {
        changeBy.value = 1;
    } else if (changeByValue < 0) {
        changeBy.value = 1;
    } else if (changeByValue > 10) {
        changeBy.value = 10;
    }
});

reset.addEventListener("click", () => {
    value.textContent = 0;
});



