const items = document.querySelectorAll(".gallery-item");
const box = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

items.forEach(item => {
    item.addEventListener("click", () => {
        box.classList.add("clicked");

        lightboxImage.src = item.src.replace("-thumbnail", "");
    });
});

closeBtn.addEventListener("click", () => {
    box.classList.remove("clicked");
});

box.addEventListener("click", () => {
    box.classList.remove("clicked");
});