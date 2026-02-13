function toggleMode(){
document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function(){

const text = [
"Software Developer Fresher",
"CSE Graduate",
"Aspiring Full Stack Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){
if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

const typingElement = document.querySelector(".typing");

if(typingElement){
typingElement.textContent = letter;
}

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type,1200);
}else{
setTimeout(type,80);
}
}

type();

});

window.addEventListener("scroll", function(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(el){
let windowHeight = window.innerHeight;
let revealTop = el.getBoundingClientRect().top;
let revealPoint = 120;

if(revealTop < windowHeight - revealPoint){
el.classList.add("active");
}

});

});

