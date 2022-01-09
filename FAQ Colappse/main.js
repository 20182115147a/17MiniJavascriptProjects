const toggles = document.querySelectorAll('.faq-toggle');
const faqs = document.getElementsByClassName('faq');

toggles.forEach(function(toggle,idx){
    toggle.onclick = function(){
        faqs[idx].classList.toggle('active')
    }
})