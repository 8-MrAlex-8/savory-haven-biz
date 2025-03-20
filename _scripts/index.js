document.querySelectorAll('.link-list-item').forEach((liItem) => {
    liItem.addEventListener("mouseover", () => {
        liItem.classList.add('link-list-hover');
    });
});