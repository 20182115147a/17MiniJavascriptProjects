const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.onmouseenter = function(){
    container.classList.add('show-left')
}
left.onmouseleave = function(){
    container.classList.remove('show-left')
}
right.onmouseenter = function(){
    container.classList.add('show-right')
}
right.onmouseleave = function(){
    container.classList.remove('show-right')
}