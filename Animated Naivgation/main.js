const toggle = document.querySelector('.toggle')
const menu = document.getElementById('menu')

toggle.onclick = function() {
    menu.classList.toggle('active')
}