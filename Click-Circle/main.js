const buttons = document.querySelectorAll('.button-circle')

buttons.forEach(button => {
    button.onclick = function(e){
        let x = e.clientX;
        let y =  e.clientY;
        let topOffset = e.target.offsetTop;
        let leftOffset = e.target.offsetLeft;
        console.log(e)
        let innerX = x - leftOffset;
        let innerY = y - topOffset;
        const circle = document.createElement('span')
        circle.classList.add('circle');
        circle.style.top= innerY + 'px';
        circle.style.left= innerX + 'px';
        this.appendChild(circle)
        setTimeout(function(){
            circle.remove()
        },500)
    }
})