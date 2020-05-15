var bars = document.getElementById("bars")
var hello = document.getElementById("hello")
var menuLeft = document.getElementById("menuleft")
bars.addEventListener("click",function(){
  bars.classList.toggle('change');
  menuLeft.classList.toggle("show")
})
hello.addEventListener("click",function(){
    hello.innerHTML = 'Dorinel ';
  
})

