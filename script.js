const numbers = document.querySelectorAll(".data");
const history = document.querySelector(".history");
const equals = document.querySelector(".equals");
const result = document.querySelector(".result");
const clearAll = document.querySelector(".clear-all");
const clear = document.querySelector(".clear-last");
const plusMinus = document.querySelector(".plus-minus");

console.log(history);

numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!result.innerHTML) {
      history.innerHTML += e.target.innerHTML;
    } else {
      history.innerHTML = result.innerHTML + e.target.innerHTML;
      result.innerHTML = "";
    }
  });
});

equals.addEventListener("click", () => {
  result.innerHTML = eval(history.innerHTML).toFixed(3);
});

clear.addEventListener("click", () => {
  history.textContent = history.textContent.slice(0, -1);
});

clearAll.addEventListener("click", () => {
  history.innerText = "";
  result.innerText = "";
});

plusMinus.addEventListener("click", () => {
  history.innerHTML += "-";
});
