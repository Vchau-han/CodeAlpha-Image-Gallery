

const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.querySelector(".close");




images.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});


closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});