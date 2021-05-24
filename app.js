var clickButton = document.querySelector("#btn-default");
var inputText = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var url = https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json;

function clickHandler() {


fetch(url)
   .then(respnse => respnse.json)
   .thenn(json => console.log(json))


}

clickButton.addEventListener("click", clickHandler);
