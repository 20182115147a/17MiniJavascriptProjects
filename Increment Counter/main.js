const counters = document.querySelectorAll('.counter')

counters.forEach(function(counter){
    counter.innerHTML = '0';
    const update = function(){
        const data = +counter.getAttribute('data-set')
        const increment = Math.ceil(data/200)
        const currentValue = + counter.innerHTML ;
        if (currentValue < data ){
            counter.innerHTML = `${currentValue + increment}`;
            setTimeout(update,1)
        }
    }
    update()

})