window.addEventListener("scroll", headerScroll);

function headerScroll(){
    const header = document.querySelector("header");//guardo la seccion header en la variable header
    header.classList.toggle("headerScroll",window.scrollY>0);//cuando se haga scroll por la window hacer que la clase headerScroll que esta aplicada en el elemento header inicie
}