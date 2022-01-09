const toggle = document.querySelector('.toggle')
const hours = document.querySelector('.hours')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const times = document.querySelector('.times')
const date = document.querySelector('.date')
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
toggle.onclick = function(){
    const html = document.querySelector('html')
    if (html.classList.contains('dark')){
        html.classList.remove('dark')
        toggle.innerText = 'Dark mode'
    }
    else {
        html.classList.add('dark')
        toggle.innerText = 'Light mode'
    }
}
function setTime(){
    const time = new Date();
    const aHours = time.getHours();
    const aMonth = time.getMonth();
    const hoursForClock = aHours >= 13 ? aHours % 12 : aHours;
    const aDay = time.getDay();
    const ampm = aHours >= 12 ? 'AM' : 'PM';
    const aDate = time.getDate();
    const aMinute = time.getMinutes();
    const aSecond = time.getSeconds();
    hours.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minute.style.transform = `translate(-50%,-100%) rotate(${scale(aMinute,0,59,0,360)}deg)`
    second.style.transform = `translate(-50%,-100%) rotate(${scale(aSecond,0,59,0,360)}deg)`
    times.innerHTML = `${hoursForClock}:${aMinute < 10 ? `0${aMinute}`:aMinute} ${ampm}`
    date.innerHTML = `${days[aDay]}, ${months[aMonth]} <span class="circle">${aDate}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()

setInterval(setTime,1000)