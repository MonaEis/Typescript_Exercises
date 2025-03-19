type Serie = {
    name: string;
    numberOfEpisodes: number;
    avgRuntime: number;
}

const seriesList: Serie[] = [
    { name: "Breaking Bad", numberOfEpisodes: 62, avgRuntime: 49 },
    { name: "Game of Thrones", numberOfEpisodes: 73, avgRuntime: 60 },
    { name: "The Office", numberOfEpisodes: 201, avgRuntime: 22 },
    { name: "Stranger Things", numberOfEpisodes: 34, avgRuntime: 51 },
    { name: "The Crown", numberOfEpisodes: 40, avgRuntime: 58 },
    ];

function watchSeries(serie: Serie){
    return new Promise<number>((resolve, reject) =>{
        // await suggestSeries();
        if(serie === undefined){
            reject("Keine Serie gefunden")
        }
        
        const totalTime = serie.numberOfEpisodes * serie.avgRuntime;
        resolve(totalTime)
    })
}
// watchSeries()

function suggestSeries(){
    return new Promise<Serie>((resolve,reject) =>{
        const randomNumber = Math.floor(Math.random()*10)
        console.log(randomNumber)
        const randomSeries = seriesList[randomNumber];
        console.log(randomSeries)
        resolve(randomSeries)
        if(randomSeries === undefined){
            reject("Keine Serie gefunden")
        }
    })
}
// suggestSeries()

async function main() {
    try{
        const suggestedSerie = await suggestSeries()
        console.log(suggestedSerie)
        const watchingTime = await watchSeries(suggestedSerie)
        console.log(`um alle Episoden von ${suggestedSerie.name} zu schauen, benötigst du ${watchingTime} Minuten`)

    }catch(error){
        console.log(error)
    }
}
main()