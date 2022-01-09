const jokeEl = document.getElementById('joke');
const btn =document.querySelector('.jokeBtn');

generateJoke();

function generateJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept':'application/json'
        }
    }).then(res => res.json())
        .then(data => jokeEl.innerText = data.joke)
}

btn.addEventListener('click',generateJoke)