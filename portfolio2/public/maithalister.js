// maithalister.js
document.addEventListener('DOMContentLoaded', () => {
    const text = "MAITHALISTER";
    let index = 0;
    const speed = 150; // typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById('animated-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
