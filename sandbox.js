let btn = document.getElementById("btn");
let placeHolders = document.getElementById("");
btn.addEventListener("click", getWords);
function getWords(){
  let words = document.querySelectorAll("input[type=text]");
let placeHolders = document.querySelectorAll(".userInput");
placeHolders.forEach((placeHolder, index) => {
  placeHolder.innerHTML = words[index].value;
  console.log(placeHolder, index);
})
document.getElementById("story-screen").style.display="block"
//show hidden story
}