"use strict";

window.onload = init;

function init() {
    const addButton = document.getElementById("addButton");
    addButton.onclick = onAddBtnClicked;
    const subtractButton = document.getElementById("subtractButton");
    subtractButton.onclick = onSubtractBtnClicked;
    const multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.onclick = onMultiplyBtnClicked;
    const divideButton = document.getElementById("divideButton");
    divideButton.onclick = onDivideBtnClicked;
}
function onAddBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);
    const number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);
    let addTotal = number1 + number2;
    const answerField = document.getElementById("answerField");
    answerField.value = addTotal;

}
function onSubtractBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);
    const number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);
    let subtractTotal = number1 - number2;
    const answerField = document.getElementById("answerField");
    answerField.value = subtractTotal;

}
function onMultiplyBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);
    const number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);
    let multiplyTotal = number1 * number2;
    const answerField = document.getElementById("answerField");
    answerField.value = multiplyTotal;

}
function onDivideBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    let number1 = Number(number1Field.value);
    const number2Field = document.getElementById("number2Field");
    let number2 = Number(number2Field.value);
    let divideTotal = number1 / number2;
    const answerField = document.getElementById("answerField");
    answerField.value = divideTotal;

}
function refresh(){
    window.location.reload("Refresh")
  }