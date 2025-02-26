enum Weekday {
    Monday, 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday, 
    Sunday 
};

console.log(Weekday);

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};
console.log(Month);

for (const day in Weekday) {
    console.log(day);
};

for (const singleMontg in Month) {
    console.log(singleMontg);
}
