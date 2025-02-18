function whoIsMona(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string) {
    const informationMona = `Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne bei SuperCode. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}.`;
    console.log(informationMona);    
}

whoIsMona("Mona", "Eismann", "Dachau", 38, "München")