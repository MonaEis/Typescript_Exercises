const meineH1 = document.querySelector<HTMLHeadingElement>("h1");
const meinBody = document.querySelector<HTMLBodyElement>("body");
const superBall1 = document.querySelector<HTMLDivElement>(".ball1");

superBall1?.addEventListener("click", changeColor1)

function changeColor1() {
    if (meinBody){
        meinBody.style.backgroundColor = "rgb(237, 117, 13)";
    }

    if (meineH1) {
        meineH1.style.color = "aquamarine";
    }
}


const superBall2 = document.querySelector<HTMLDivElement>(".ball2");

superBall2?.addEventListener("click", changeColor2)

function changeColor2() {
    if (meinBody){
        meinBody.style.background = "#0a72b8";
    }

    if (meineH1) {
        meineH1.style.color = "rgb(252, 177, 112)";
    }
}


const superBall3 = document.querySelector<HTMLDivElement>(".ball3");

superBall3?.addEventListener("click", changeColor3)

function changeColor3() {
    if (meinBody){
        meinBody.style.background = "rgb(154, 12, 132)";
    }

    if (meineH1) {
        meineH1.style.color = "#70c4fc";
    }
}


const superBall4 = document.querySelector<HTMLDivElement>(".ball4");

superBall4?.addEventListener("click", changeColor4)

function changeColor4() {
    if (meinBody){
        meinBody.style.background = "#00d58e";
    }

    if (meineH1) {
        meineH1.style.color = "rgb(252, 112, 231)";
    }
}