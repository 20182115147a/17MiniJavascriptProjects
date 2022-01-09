const body  = document.body;
const rightBtn = document.getElementById('right')
const leftBtn = document.getElementById('left')
const sliders = document.querySelectorAll('.slider')

let activeSlider = 0;
showBackGround()
rightBtn.onclick = function(){
    activeSlider++;
    if (activeSlider > sliders.length - 1){
        activeSlider = 0;
    }
    showBackGround();
    showSlider()
}
leftBtn.onclick = function(){
    activeSlider--;
    if (activeSlider < 0){
        activeSlider = sliders.length -  1;
    }
    showBackGround();
    showSlider()
}
function showBackGround(){
   body.style.backgroundImage = sliders[activeSlider].style.backgroundImage;
}
function showSlider(){
    sliders.forEach(slider => {
        slider.classList.remove('active')
    })
    sliders[activeSlider].classList.add('active')
}