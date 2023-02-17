let idl= document.getElementById("idl");
let idra = document.getElementById("idra")

idl.addEventListener("mouseover" , ()=>{
    idra.style.border= "none";
})

idl.addEventListener("mouseout" ,()=>{
    idra.style.border = "2px solid hsl(0, 0%, 41%)"
})

 