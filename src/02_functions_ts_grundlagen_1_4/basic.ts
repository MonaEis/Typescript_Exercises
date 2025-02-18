function showHero(heroName: string, heroPower: string, heroEnemy:string) {
    let nameOutput = `Mein:e Lieblingsheld:in ist ${heroName}. `; 
    let powerOutput = `Er/Sie hat die Fähigkeit: ${heroPower}. `; 
    let enemyOutput = `Sein/Ihr größte/r Gegner:in ist: ${heroEnemy}.`;
    console.log(nameOutput + powerOutput + enemyOutput);    
}

showHero("Wonder Woman", "übermenschliche Stärke, Schnelligkeit und die Fähigkeit, fliegen zu können", "Ares")
