const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variable to display the mad lib

const madLibDisplay = document.querySelector("mad-lib");

//Variable for the form

const form = document.querySelector("form");

//Variable for the mad lib story

const story = "My friend and I started a secret club! We meet every day by the "

form.addEventListener("submit", function(event){
    event.preventDefault();

    madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun11.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value);
});

