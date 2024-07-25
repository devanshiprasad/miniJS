const hex= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color= document.querySelector(".color");
const reset= document.getElementById("reset");
const pastel= document.getElementById("pastel");


const originalText= color.textContent;
const originalBg = document.body.style.backgroundColor;

reset.addEventListener("click",function(){
    color.textContent= originalText;
    document.body.style.backgroundColor= originalBg;
})

pastel.addEventListener("click",function(){
    const pastelColor = getPastelColor();

    color.textContent = pastelColor;
    document.body.style.backgroundColor = pastelColor;
})
btn.addEventListener("click",function(){
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent =hexColor;
    document.body.style.backgroundColor =hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getPastelColor() {
    const r = Math.floor((Math.random() * 127) + 127); 
    const g = Math.floor((Math.random() * 127) + 127); 
    const b = Math.floor((Math.random() * 127) + 127); 
    return `rgb(${r}, ${g}, ${b})`;
}