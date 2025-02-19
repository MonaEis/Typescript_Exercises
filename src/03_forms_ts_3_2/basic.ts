const fontSizeInput = document.querySelector<HTMLInputElement>("#font-size");
const fontFamilyInput = document.querySelector<HTMLInputElement>("#font-family");
const textInput = document.querySelector<HTMLInputElement>("#text-input");
const outputDiv = document.querySelector<HTMLParagraphElement>(".output")

textInput?.addEventListener("input", changeText);

function changeText() {
    if (outputDiv && textInput) {
    outputDiv.innerHTML = textInput.value;
    }    
}

fontSizeInput?.addEventListener("input", changeFontSize);

function changeFontSize() {
    if (fontSizeInput && outputDiv) {
        outputDiv.style.fontSize = fontSizeInput.value + "px";
        console.log(fontSizeInput.value + "px");        
    }
}

fontFamilyInput?.addEventListener("change", changeFontFamily);

function changeFontFamily() {
    if (fontFamilyInput && outputDiv) {
        outputDiv.style.fontFamily = fontFamilyInput.value
    }
    
}


