const boxes = document.querySelectorAll('.box');

window.onscroll = function(){
    aniScroll();
}
aniScroll();
function aniScroll() {
    const viewPortHeight = (window.innerHeight/5*4);
    boxes.forEach(function(box){
        const boxTop = box.getBoundingClientRect().top;
        if (viewPortHeight > boxTop) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}