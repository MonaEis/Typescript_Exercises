const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a,b) => a-b);
console.log(numArray1);

numArray1.sort((a, b) => b-a);
console.log(numArray1);