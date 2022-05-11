let displayBox = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");

//show in display number
function showDisplay(event) {
  const text = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    displayBox.innerHTML = text;
  } else {
    displayBox.innerHTML += text;
  }
}
list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});
// show calculate
function calculate() {
  let reslute = displayBox.innerText;
  displayBox.innerText = eval(reslute);
}
// button AC
function clearAll() {
  displayBox.innerText = 0;
}

// button C
function clearLast() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear-all").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clearLast);
