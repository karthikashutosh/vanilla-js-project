var clickButton = document.querySelector("#btn-default");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("output-text");

function clickHandler() {}

outputText.innerHTML = inputText.value;

clickButton.addEventListener("click", clickHandler);
