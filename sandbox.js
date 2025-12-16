let btn = document.getElementById("btn");
btn.addEventListener("click", getWords);
function getWords(){
  let words = document.querySelectorAll("input[type=text]");
    [console.log = words, index]
let placeHolders = document.querySelectorAll(".userInput");
placeHolders.forEach((placeHolder, index) => {
  console.log(placeHolder, index);
})
}