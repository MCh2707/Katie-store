let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    
    // Update slide indicator
    document.getElementById('current-slide').textContent = currentIndex + 1;
    document.getElementById('total-slides').textContent = slides.length;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initial slide indicator setup
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total-slides').textContent = document.querySelectorAll('.slide').length;
    showSlide(currentIndex);
});

// Commented out the auto-slide functionality
// setInterval(nextSlide, 3000);

document.getElementById('printButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('outputText').textContent = userInput;
});
