let stat=document.querySelector("h4");
var add=document.querySelector(
    "#add"
)
add.addEventListener("click",()=>{
    stat.innerHTML="Friend";
    stat.style.color="green";
})
let remove=document.querySelector("#remove")
remove.addEventListener("click",()=>{
    stat.innerHTML="Stranger"
    stat.style.color="red";
})