console.log(fetch("https://picsum.photos/v2/list"))

type Image = {
    url: string;
}

fetch("https://picsum.photos/v2/list").then((response) => response.json()).then((data) => {
    console.log(data);
    
    const urlArray = data.map((item: Image) => item.url);
    console.log(urlArray)
}).catch((error) => console.log(error));