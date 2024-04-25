let stat=document.querySelector("h4");
var btn=document.querySelector(
    "#add"
)
let check=0;
btn.addEventListener("click",()=>{
    if(check==0){
    stat.innerHTML="Friend";
    stat.style.color="green";
    btn.innerHTML=" Remove friend" 
    check=1
}
else{
    stat.innerHTML="Stranger"
    stat.style.color="red";
    btn.innerHTML=" ADD friend" 
    check=0
}
})
