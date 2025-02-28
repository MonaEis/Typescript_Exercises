// <figure>
//   <img
//     src="/shared-assets/images/examples/elephant.jpg"
//     alt="Elephant at sunset" />
//   <figcaption>An elephant at sunset</figcaption>
// </figure>

const addToGallery = document.getElementById("gallery");
// console.log(addToGallery);

if(addToGallery){
addToGallery.innerHTML += '<figure><img alt="Pflanze" src="./assets/img/jesse-riggs-K-tBw4e1iZ0-unsplash.jpg"><figcaption>Fig. 1</figcaption></figure> <figure><img alt="Pflanze" src="./assets/img/thimo-van-leeuwen-nz08m1BF8Io-unsplash.jpg"><figcaption>Fig. 2</figcaption></figure> <figure><img alt="Pflanze" src="./assets/img/yusuf-evli-7wohsOM5Asg-unsplash.jpg"><figcaption>Fig. 3</figcaption></figure>'
}