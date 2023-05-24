let string = "";
const buttons = document.querySelectorAll(".button");

let arrayFrombtn = Array.from(buttons);
console.log(arrayFrombtn);

arrayFrombtn.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector(".input").value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
