const userInput = document.querySelector("input");
const btnInput = document.querySelector("button");
const outputList = document.querySelector("#myList");

btnInput?.addEventListener("click", itemSetToList);

function itemSetToList() {
    console.log("hier passiert was");

    const newItem = document.createElement("li");
    newItem.innerText = userInput ? userInput.value : "";
    
    // console.log(newItem);

    if (outputList && userInput?.value !== ""){
        outputList.appendChild(newItem)
    }
    if (userInput){
        userInput.value = "";
    }
};