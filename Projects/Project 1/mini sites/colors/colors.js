function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function setRandomColors() {
    const introElement = document.querySelector('.intro');
    const colorA = getRandomColor();
    const colorB = getRandomColor();
    const duration = (2 + Math.random() * 3) + 's'; 

    introElement.style.setProperty('--colorA', colorA);
    introElement.style.setProperty('--colorB', colorB);
    introElement.style.setProperty('--duration', duration);
}
setRandomColors();

const introElement = document.querySelector('.intro');
introElement.addEventListener('animationiteration', setRandomColors);