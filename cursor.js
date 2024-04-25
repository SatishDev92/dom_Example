let elem=document.querySelectorAll(".elm")
elem.forEach((val)=>{

val.addEventListener("mouseenter", ()=>{
val.childNodes[3].style.opacity=1;
});
val.addEventListener("mouseleave", ()=>{
    val.childNodes[3].style.opacity=0;
    });
    val.addEventListener("mousemove", (dts)=>{
        val.childNodes[3].style.left =dts.x +"px"
        val.childNodes[3].style.top =dts.y +"px"
    });
    })
