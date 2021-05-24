var clickButton = document.querySelector("#btn-default");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("output-text");
 
console.log(inputText);

function clickHandler(){
    console.log(inputText.value);

}

clickButton.addEventListener("click",clickHandler)
