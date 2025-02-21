const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers() {
    console.log(zahlen.filter((singleEven) => singleEven % 2 === 0));       
}
printEvenNumbers()

function printOddNumbers() {
    console.log(zahlen.filter((singleOdd) => singleOdd %2 !== 0));    
}
printOddNumbers()

let oddNumbers = printOddNumbers();
let evenNumbers = printEvenNumbers();
console.log(oddNumbers);
console.log(evenNumbers);
