const allSpans = document.querySelectorAll<HTMLElement>(".example");
console.log(allSpans);

const button = document.querySelector("button");

button?.addEventListener("click", toggleColor);

function toggleColor() {
    allSpans.forEach((span) => {
        if(span.style.backgroundColor === "black") {
            span.style.backgroundColor = "",
        span.style.color = ""
        } else {
            span.style.backgroundColor = "black";
            span.style.color = "white";
        }
        });
};