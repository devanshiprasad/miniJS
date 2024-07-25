let count= document.getElementById("count");
const decrease= document.getElementById("decrease");
const reset= document.getElementById("reset");
const increase= document.getElementById("increase");


decrease.addEventListener("click",(e)=>{
    count.innerHTML= parseInt(count.innerHTML)-1;
})

reset.addEventListener("click",(e)=>{
    count.innerHTML=0;
})

increase.addEventListener("click",(e)=>{
    count.innerHTML= parseInt(count.innerHTML)+1;
})
