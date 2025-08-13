const box = document.querySelector(".box");
let turn  ='O';
box.addEventListener("click" , (event)=>{
    const element = event.target;
    element.innerHTML ="O";
})