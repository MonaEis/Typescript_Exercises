const output = document.querySelector(".api-box");

type Picsum = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        data.forEach((item: Picsum) => {
            const figureElement = document.createElement("figure");

            const imgOutput = document.createElement("img");
            imgOutput.src = item.download_url;
           
            const authorOutput = document.createElement("figcaption");
            authorOutput.innerText = item.author;

            figureElement.append(imgOutput, authorOutput);

            if (output) {
                 output.appendChild(figureElement);
            }
        })
       
    })
    .catch((error) => console.log(error));





    // fetch("https://picsum.photos/v2/list")
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);

    //     const figureElement = document.createElement("figure");

    //     const imgArray = data.map((imgItem: Picsum) => imgItem.url);
    //     imgArray.forEach((singleImg) => {
    //         const imgOutput = document.createElement("img");
    //         // console.log(singleImg)
    //         imgOutput.src = singleImg;
    //         if (figureElement) {
    //             figureElement.appendChild(imgOutput);
    //         }
    //     });

    //     const authorArray = data.map((authorItem: Picsum) => authorItem.author);
    //     authorArray.forEach((singleAuthor) => {
    //         const authorOutput = document.createElement("figcaption");
    //         authorOutput.innerText = singleAuthor;
    //         if (figureElement) {
    //             figureElement.appendChild(authorOutput);
    //         }

    //         if (output) {
    //             output.appendChild(figureElement);
    //         }
    //     });
    // })
    // .catch((error) => console.log(error));
