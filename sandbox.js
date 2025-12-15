let btn = document.getElementById("btn");
let words = document.querySelectorAll("input[type=text]")
  console.log(words)
btn.addEventListener("click", getWords);
function getWords(){
  console.log(btn)
}