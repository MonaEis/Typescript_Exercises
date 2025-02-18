function howOldAmI(birthYear: number) {
    let calculation = new Date().getFullYear() - birthYear;
    return calculation;
}

let currentCalculation = howOldAmI(1986);
console.log(currentCalculation);


function ageGap(agePersonOne: number, agePersonTwo: number) {
    let altersDifferenz = agePersonOne - agePersonTwo;
    return altersDifferenz;
}

let resultGap = ageGap(44, 39);
console.log(resultGap);
