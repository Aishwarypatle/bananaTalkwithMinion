var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function clickEventHandler() 
{
    outputDiv.innerText = "shdshdk "+ txtInput.value;
};

btnTranslate.addEventListener("click", clickEventHandler) 