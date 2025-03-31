let colour = document.querySelectorAll('.colour')
function colorChange(element){
    let intro = document.querySelector('intro');
    for (let i = 0; i < intro.length; i++){
        let tro = intro[i];
        let randomColor = .2 + Math.random() * 1;
        tro.style.setPropperty("--duration", randomColor+"s");

    }
    setInitialRandomColor(intro);
    colour.addEventListener('animationiteration', Color, true)
}
colorChange(colour);