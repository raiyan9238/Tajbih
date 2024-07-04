let countEL = document.getElementById("count-el");
let incrementEL = document.getElementById("increment-el");
let saveEL = document.getElementById("save-el");
let totalEL = document.getElementById("total-el");
let prevEL = document.getElementById("prev");

let count = 0;
let total = 0;
function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let countSTR = count + " - ";
  prevEL.textContent += countSTR;
  total += count;
  totalEL.textContent = total;
  count = 0;
  countEL.textContent = count;
}
