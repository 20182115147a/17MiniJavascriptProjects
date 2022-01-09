const cups =document.querySelectorAll('.cup-small')
const litter = document.getElementById('litter')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
updateBigCup();

cups.forEach(function(cup,idx){
    cup.onclick=function(){
        fillCups(idx)
    }
})

function fillCups(idx){
    if (idx + 1 == cups.length){
      if(cups[idx].classList.contains('full')){
        idx--
      }
    }
    else if (cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    cups.forEach(function(cup,idx2){
        if (idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    })
    updateBigCup();
}
function updateBigCup() {
    const totalCup = document.querySelectorAll('.cup.cup-small').length
    const fillCup = document.querySelectorAll('.cup.cup-small.full').length
    if (fillCup === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;  
    }
    else {   
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fillCup/totalCup * 330}px`
        percentage.innerText = `${fillCup/totalCup * 100}%`
       
    }
    if (fillCup===totalCup){
        remained.style.visibility = 'hidden';
        remained.style.height = 0
    }
    else {
        remained.style.height = 'auto'
        remained.style.visibility = 'visible';
        litter.innerText = `${2-(250*fillCup /1000)}L`
    }
}
