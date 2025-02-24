const friendNames = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for(let i = 0; i <= friendNames.length; i++) {
    console.log(friendNames[i]);
}

for(const singleName of friendNames) {
    console.log(singleName);
}