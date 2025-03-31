let colour = document.querySelector('.colour')
function colorChange(element){
    let intro = element.querySelector('intro');
    for (let i = 0; i < intro.length; i++){
        let tro = intro[i];
        let randomColor = .2 + Math.random() * 1;
        tro.style.setProperty("--duration", randomColor+"s");

    }
    setInitialRandomColor(intro);
    colour.addEventListener('animationiteration', changeColor, true)
}
colorChange(colour);
function setInitialRandomColor(elements){
    for (let i = 0; i < colour.length; i++){
        let tro = elements[i];
        tro.style.setProperty("--colorA", getRandomColor().value);
        tro.style.setProperty("--colorB", getRandomColor().value);

    }
}