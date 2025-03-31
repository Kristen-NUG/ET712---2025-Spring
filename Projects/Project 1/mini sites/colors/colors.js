function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function applyRandomColorAnimation() {
    const introElement = document.querySelector('.intro');
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();
    

    const styleSheet = document.styleSheets[0];
    const animationName = 'dynamicColorCycle';
    const keyframes = `
        @keyframes ${animationName} {
            0% { color: ${color1}; }
            25% { color: ${color2}; }
            50% { color: ${color3}; }
            75% { color: ${color4}; }
            100% { color: ${color1}; }
        }`;
    
        for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
        if (styleSheet.cssRules[i].name === animationName) {
            styleSheet.deleteRule(i);
        }
    }
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    introElement.style.animation = `${animationName} 5s infinite linear`;
}
applyRandomColorAnimation()