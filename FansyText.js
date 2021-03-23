const text = document.querySelector(".growingText");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";   //Stops from creating a repeated text in the html rendation.

// Adds a span container around each character in the text
function addSpan(item){
    text.innerHTML += "<span>" + item + "</span>";
}
splitText.forEach(addSpan);

// Animation
let timer = setInterval(onTick, 50);
let char = 0;

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('animate');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
}
