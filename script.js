// ==============================
// SELECT ELEMENTS
// ==============================

const galleryItems = document.querySelectorAll(".gallery-item");
const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;

// ==============================
// OPEN LIGHTBOX
// ==============================

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

// ==============================
// SHOW IMAGE
// ==============================

function showImage(){

    lightboxImage.src = galleryImages[currentIndex].src;

}

// ==============================
// CLOSE LIGHTBOX
// ==============================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ==============================
// NEXT IMAGE
// ==============================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

// ==============================
// PREVIOUS IMAGE
// ==============================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// ==============================
// KEYBOARD CONTROLS
// ==============================

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display !== "flex") return;

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});

// ==============================
// CLICK OUTSIDE IMAGE TO CLOSE
// ==============================

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

// ==============================
// FILTER IMAGES
// ==============================

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        // Active Button

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item=>{

            if(filter === "all"){

                item.style.display = "block";

            }

            else if(item.classList.contains(filter)){

                item.style.display = "block";

            }

            else{

                item.style.display = "none";

            }

        });

    });

});