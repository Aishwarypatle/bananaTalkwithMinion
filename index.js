console.log("script");
var btnTranslate= document.querySelector("#btn-translate");

var username = prompt("Give me your username..");
var welcomeMessage = username+ " is your username";
alert(welcomeMessage); 
function clickEventHandler() {
    console.log("Clickeddd");}

btnTranslate.addEventListener("click", clickEventHandler()) 