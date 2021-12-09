var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/minion.json"



    function getTranslateUrl(text)
        {
        return serverURL+ "?"+ "text="+text
        }

    function errorHandler(error)
        {
    console.log("Error", error);
    alert("Server not working ! Try after some time ")
        }

    function clickHandler() 
        {
        var inputText = txtInput.value;
    fetch(getTranslateUrl(inputText))
    .then(response => response.json())
    .then(json =>   {
                    var translatedText = json.contents.translated;
                    outputDiv.innerText = translatedText;
                    })
    .catch(errorHandler)
        };

btnTranslate.addEventListener("click", clickEventHandler) 