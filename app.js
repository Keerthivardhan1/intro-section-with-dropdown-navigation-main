
const four = document.querySelector(".four");
const togglebtn = document.querySelector(".hamberger");
const loginregister = document.getElementById("nav_right");
const mobile_nav = document.querySelector(".nav_mobile")

togglebtn.addEventListener("click" , ()=>{
    console.log("clicked");
    if(four.style.display == "none"){
        four.style.display = "flex";            // no block its should be flex
        loginregister.style.display = "block";
        mobile_nav.style.height = "100vh";
        togglebtn.style.backgroundImage = "url('icon-close-menu.svg')";
        four.style.transform = "translateX(0%)"

    }else{
        four.style.display = "none";
        loginregister.style.display = "none";
        mobile_nav.style.height = "auto";
        togglebtn.style.backgroundImage = "url('icon-menu.svg')"
        four.style.transform = "translateX(100%)"
    }
})
 