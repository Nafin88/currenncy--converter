const formopenBtn=document.querySelector("#form-open"),
 home=document.querySelector(".home"),
formcontainer=document.querySelector(".form_container"),
formcloserBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwshowHide=document.querySelector(".eye");

formopenBtn.addEventListener("click",()=> home.classList.add("show"))
formcloserBtn.addEventListener("click",()=> home.classList.remove("show"))

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formcontainer.classList.add("active");
});
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formcontainer.classList.remove("active");
});