var clickButton = document.querySelector("#btn-default");
var inputText = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

var url ="https://api.funtranslations.com/translate/minion.json";

function urlTranslation(input){  

return url + "?" + "text=" + input;
}



function clickHandler() {
   
    var textInput = inputText.value;

fetch(urlTranslation(textInput))
   .then(res => res.json())
   .then(json => {
       var traslatedText = json.contents.translated;
       outputDiv.innerText = traslatedText;
   })
   .catch(error => alert("something wrong ladies and gentleman please try again later")
   )

}

clickButton.addEventListener("click", clickHandler);
