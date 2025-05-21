// El algoritmo para rotar cada slider en un intervalo de 3 segundos
document.addEventListener("DOMContentLoaded", () => {
    let slidesTrack = document.querySelector("div.hero-track");
    let slides = [...slidesTrack.querySelectorAll("section")];
    let currentSlide = 0;
    let direction = 1;
    let intervalId = null;

    function tick(){
        intervalId = setTimeout(
            ()=>{
                moveNext();
                tick();
            }, 3000);
    }
    function moveNext(){
        let nextSlideIndex = currentSlide + direction;
        if (nextSlideIndex >= slides.length ) {
            nextSlideIndex = slides.length - 2;
            direction = -1;
        } else if (nextSlideIndex < 0) {
            nextSlideIndex = 1;
            direction = 1;
        }
        moveToSlide(nextSlideIndex);
    }
    function moveToSlide( slideIndex) {
        if (intervalId){
            clearTimeout(intervalId);
        }
        currentSlide = slideIndex;
        const positionTo = `${(-currentSlide) * 100}vw`;
        slidesTrack.style.transform = `translateX(${positionTo})`;
        tick();
    }
    tick();
});