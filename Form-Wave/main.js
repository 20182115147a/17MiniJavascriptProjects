const labels = document.querySelectorAll('.form-control label')

labels.forEach(function(label){
    label.innerHTML = label.innerText.split('')
    .map(function(char,index){
        return `<span style = "transition-delay: ${index*20}ms">${char}</span>`
    }).join('');

})
