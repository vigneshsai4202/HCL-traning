const num1 = document.getElementById("a");
const num2 = document.getElementById("b");
const result = document.getElementById("result");

const addbtn = document.getElementById("add");
const subbtn = document.getElementById("sub");
const multibtn = document.getElementById("multi");
const divbtn = document.getElementById("div");

function calculate(operation) {
  const a = Number(num1.value);
  const b = Number(num2.value);

  if (num1.value === "" || num2.value === "") {
    result.textContent = "Enter numbers!";
    return;
  }

  let res;

  switch (operation) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b !== 0 ? a / b : "Cannot divide by 0";
      break;
    default:
      res = "Invalid operation";
  }

  result.textContent = res;
}

// Event handling
addbtn.addEventListener("click", () => calculate("+"));
subbtn.addEventListener("click", () => calculate("-"));
multibtn.addEventListener("click", () => calculate("*"));
divbtn.addEventListener("click", () => calculate("/"));
