"use strict";
let name = prompt("What's your name?");
function calc() {
    let form = document.forms.calculator;
    let a = form.elements.price;
    let b = form.elements.count;
    let a0 = form.elements.price0;
    let b0 = form.elements.count0;
    let a1 = form.elements.price1;
    let b1 = form.elements.count1;
    let a2 = form.elements.price2;
    let b2 = form.elements.count2;
    let a3 = form.elements.price3;
    let b3 = form.elements.count3;
    let result = document.getElementById("result");
    let r = a.value * b.value + a0.value * b0.value + a1.value * b1.value + a2.value * b2.value + a3.value * b3.value;
let test=true;
  if (a0.value<0||a1.value<0||a2.value<0||a3.value<0||a.value<0||b0.value<0||b1.value<0||b2.value<0||b3.value<0||b.value<0) test=false;
  let result = document.getElementById("result");
  if (isNaN(r)||test==false) result.innerHTML = "Что-то пошло не так...";
  else {
    result.innerHTML = `${name || "Аноним"}, с вас ${r} рублей.`;
  }
}
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });
let btnn=document.getElementById("btn");
btnn.addEventListener("click",calc);
