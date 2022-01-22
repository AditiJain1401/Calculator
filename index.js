const resultDisplay = document.getElementById('display');
const buttonsDiv = document.querySelector('.buttons');
let result = 0
const buttonTexts = ["C", '/', "*", "&larr;", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, ".", "(", 0, ")", "="];

function displayButtons() {
    let htmlCode = ``
    for (let btn of buttonTexts) {
        htmlCode += `<button class="btn" onclick="render('${btn}')">${btn}</button>`;
    }
    buttonsDiv.innerHTML = htmlCode;
}

function render(selectedBtn) {
    if (selectedBtn == "C") {
        resultDisplay.innerText = ""
    } else if (selectedBtn == "←") {
        resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
    } else if (selectedBtn == "=") {
        resultDisplay.innerText = eval(display.innerText);
    } else {
        resultDisplay.innerText += selectedBtn;
    }
}
displayButtons();