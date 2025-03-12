console.log(window);
console.log(window.navigator.userAgent)
console.log(navigator.appName)
console.log(navigator.platform)

const inputDiv = document.querySelector(".input");

if (inputDiv) {
    const userBrowserInput = document.createElement("p");
    userBrowserInput.innerText = `Browsername ${window.navigator.userAgent}`;

    const innerWidthInput = document.createElement("p");
    innerWidthInput.innerText = `Innere Breite des Domuents: ${window.innerWidth}`;

    const innerHeightInput = document.createElement("p");
    innerHeightInput.innerText = `Dokument Innenhöhe: ${window.innerHeight}`;

    const colorDepthInput = document.createElement("p");
    colorDepthInput.innerText = `Dokument Innenhöhe: ${window.screen.colorDepth}`;

    const pixelDepthInput = document.createElement("p");
    pixelDepthInput.innerText = `Dokument Innenhöhe: ${window.screen.pixelDepth}`;

    inputDiv.append(userBrowserInput, innerWidthInput, innerHeightInput, colorDepthInput, pixelDepthInput)
}