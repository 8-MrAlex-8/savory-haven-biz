document.querySelectorAll('.link-list-item').forEach((liItem) => {
    liItem.addEventListener("mouseover", () => {
        liItem.classList.add('link-list-hover');
    });
});

var grid = document.querySelector('.masonry-container');

imagesLoaded(grid, function () {
    new Masonry(grid, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true
    });
});


// this function checks if a particular element is 10% in the viewport

// const isVisible = (element) => {
//     let rect = element.getBoundingClientRect()
//     let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

//     return !(
//         Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < 10 ||
//         Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < 10
//     )
// };