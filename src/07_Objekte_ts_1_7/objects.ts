type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
  };
  
  const myTopFour: Music[] = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      release_year: 1969,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_year: 1978,
      medium: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_year: 1971,
      medium: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_year: 1983,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

  const outputDiv = document.querySelector<HTMLDivElement>(".output");

  myTopFour.forEach((beatles) =>{
    if (outputDiv) {
   outputDiv.innerHTML += `<p>${beatles.artist}<br>${beatles.title}<br>${beatles.medium}</p>`
    }});


    const outputRelease = document.querySelector<HTMLDivElement>(".release");

    myTopFour.forEach((release)=>{
        if (outputDiv && release.release_year > 1975) {
       outputDiv.innerHTML += `<p>${release.artist}<br>${release.title}<br>${release.medium}</p>`
        }});