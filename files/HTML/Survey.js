'use strict'

// This JavaScript program handles when the form in Survey.html was submitted, that is when the submit button is clicked


let userName = document.getElementById("name");
let userEmail = document.getElementById("Email");
let userAge = document.getElementById("age");
let button = document.getElementById("submit-button");
button.onclick = function() {
    alert("you have clicked the submit button");
    alert("userName = " + userName.value + "\nuserEmail = " + userEmail.value+"\n");
};