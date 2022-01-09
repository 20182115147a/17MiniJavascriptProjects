const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

btn.onclick = function(){
    search.classList.toggle('active');
    input.focus()
}