document.addEventListener('DOMContentLoaded', function() {
    const helloWorldText = document.querySelector('.first');
    const bigButton = document.querySelector('#bigButton');
    const redButton = document.querySelector('.third');

    bigButton.addEventListener('click', function() {
        helloWorldText.classList.toggle('bigger-text');
    });

    window.addEventListener('scroll', function() {
        // Change the color of the "Red" button to red when scrolling
        const scrollPosition = window.scrollY;
        const redColor = scrollPosition > 0 ? 'red' : '#4CAF50';
        redButton.style.backgroundColor = redColor;
    });
});
