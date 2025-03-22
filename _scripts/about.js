let imgArray = [
    "../_assets/barista-2.jpg",
    "../_assets/owner.jpg",
    "../_assets/manager.jpg",
    "../_assets/head-baker.jpg",
    "../_assets/baker.jpg",
    "../_assets/head-barista.jpg",
    "../_assets/barista-1.jpg"
];

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

preloadImages(imgArray);

let index = 0;

document.querySelector('.chevron-right').addEventListener("click", () => {
    index = (index + 1) % imgArray.length;
    document.querySelector('img.person-img-a').src = imgArray[(index % imgArray.length)];
    console.log(index % imgArray.length);
    document.querySelector('img.person-img-b').src = imgArray[(index + 1) % imgArray.length];
    document.querySelector('img.person-img-c').src = imgArray[(index + 2) % imgArray.length];
});

document.querySelector('.chevron-left').addEventListener("click", () => {
    index--;
    if (index < 0) { index = imgArray.length - 1; }
    document.querySelector('img.person-img-a').src = imgArray[(index) % imgArray.length];
    document.querySelector('img.person-img-b').src = imgArray[(index + 1) % imgArray.length];
    document.querySelector('img.person-img-c').src = imgArray[(index + 2) % imgArray.length];
});


