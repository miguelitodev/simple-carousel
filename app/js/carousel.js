// ESSE CÓDIGO BASICAMENTE PEGA O SCROLL DO CONTAINER 
// E PASSA ELE PARA O EVENTO DA RODINHA DO MOUSE

// PEGA A TAG NO HTML, O CONTAINER COM AS IMGS
document.querySelector("#items-carousel")
// COLOCA UM EVENDO DA RODINHA DO SCROLL
.addEventListener("wheel", event => {
    // SE A RODINHA FOR PARA CIMA O VALOR É POSITIVO SE FOR PARA BAIXO É NEGATIVO
    if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
    } else {
        event.target.scrollBy(-300, 0);
    }
})