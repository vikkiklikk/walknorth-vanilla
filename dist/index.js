"use strict";
//# sourceMappingURL=index.js.map


// Carousel

const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;

// Function to move the carousel to the specified index
function moveCarousel(index) {
    if (index < 0) {
        index = 0;
    } else if (index > 1) { // Adjust to the number of visible cards (3 in this case)
        index = 2;
    }
    const translateX = -index * 110; // Adjust the card width and margin

    carousel.style.transform = `translateX(${translateX}%)`;
    currentIndex = index;
}

prevButton.addEventListener("click", () => moveCarousel(currentIndex - 1));
nextButton.addEventListener("click", () => moveCarousel(currentIndex + 1));

// Toggle hamburger menu
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", function() {
    // Toggle the visibility of the dropdown menu
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close the dropdown menu when clicking outside of it
document.addEventListener("click", function(event) {
    if (!dropdownMenu.contains(event.target) && event.target !== menuBtn) {
        dropdownMenu.style.display = "none";
    }
});