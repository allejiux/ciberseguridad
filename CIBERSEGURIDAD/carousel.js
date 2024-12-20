document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.carousel-button.prev');
    const next = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    const updateCarousel = () => {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
