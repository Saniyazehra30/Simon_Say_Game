let btn = document.querySelector("button");
let form = document.querySelector("form");
form.addEventListener("submit" , function(event){
    event.preventDefault();
});
btn.addEventListener("click", function(){
   window.location.href="/simon say game/page2/playGame.html";
});