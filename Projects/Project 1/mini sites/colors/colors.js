function colorChange(element){
    let intro = document.getElementById('intro');
    for (let i = 0; i < intro.children.length; i++){
        let tro = intro.children[i];
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        tro.style.setPropperty("--duration", randomColor+"s");

    }
}