// filepath: c:\Users\pc\week6 database\feb-2025-css3-transitions-animations-js-functions-Juliusletiktik1338\script.js
document.querySelector('button').addEventListener('click', () => {
    const image = document.querySelector('.image');
    image.style.display = 'block'; // Make the image visible
    image.style.animation = 'fadeIn 2s ease-in-out'; // Trigger the animation
});