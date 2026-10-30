const correctButton=document.getElementById("correct");

correctButton.addEventListener("click",()=>{
 window.location.href="s.correct.html";
});

const mistakeButtons=document.querySelectorAll(".mistake");

mistakeButtons.forEach((button)=>{
 button.addEventListener("click",()=>{
    window.location.href="mistake.html";
 });
});