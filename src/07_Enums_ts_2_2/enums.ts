enum ClothingColor {
    Gelb = "#ffff00", 
    Orange = "#ff6347", 
    Pink = "#ffc0cb", 
    Blau = "#3535ec", 
    Lila = "#5a0d5a",
    Grau = "#9e9d9d"
};

const allColors: ClothingColor[] =[
    ClothingColor.Gelb, 
    ClothingColor.Orange, 
    ClothingColor.Pink, 
    ClothingColor.Blau, 
    ClothingColor.Lila, 
    ClothingColor.Grau,
]
console.log(allColors);

const outputDiv = document.querySelector(".output");

for(const color of allColors) {
   
    if (outputDiv) {
    outputDiv.innerHTML += `<button style="background-color:${color}; margin-right:10px; padding:10px">${color}</button>`;
}
}
// for(const color of allColors) {
   
//     if (outputDiv) {
//     outputDiv.innerHTML += `<button style="background-color:${color}; margin-right:10px; padding:10px">${Object.keys(ClothingColor)}</button>`;
// }
// }


// - von AI
// if (outputDiv) {
//     for (const color of allColors) {
//         // ✅ Hier holen wir den passenden Enum-Namen zum Farbwert
//         const colorName = Object.keys(ClothingColor).find(key => ClothingColor[key as keyof typeof ClothingColor] === color);

//         outputDiv.innerHTML += `
//             <button style="background-color:${color}; margin-right:10px; padding:10px; border:none; color:black;">
//                 ${colorName}
//             </button>
//         `;
//     }
// }

