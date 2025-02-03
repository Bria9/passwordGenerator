"use strict"

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const submitBtn =  document.getElementById("submit-btn")
let btnClicked = false;

const characters = ["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"
];

function password1Gen(){
    let password = " "
    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random()* characters.length);
        password += characters[index]
    }
     password1.textContent = password
     console.log(password);
     
   }


function password2Gen(){
    let password = " "
    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random()* characters.length);
        password += characters[index]
    }
     password2.textContent = password
     console.log(password);
     
   }


 submitBtn.addEventListener("click", password1Gen);
 submitBtn.addEventListener("click", password2Gen);