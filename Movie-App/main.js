const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22fb06d73774750612caf8b09c09c4b&page=1'
const API_PATH ="https://image.tmdb.org/t/p/w1280"
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=f22fb06d73774750612caf8b09c09c4b&query="'
getMovies(API_URL)
function getMovies(API_URL){
    fetch(API_URL)
    .then(response => response.json())
    .then(movies =>renderMovie(movies.results))
}
const main = document.getElementById('main')
function renderMovie(movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {title,poster_path,overview,vote_average} = movie
        const movieEl = document.createElement('div');
        movieEl.id = 'movie';
        movieEl.innerHTML = `
                <img src="${API_PATH + poster_path}" alt="">
                <div id="info">
                    <h3 class="tittle">${title}</h3>
                    <span class="${rateHandle(vote_average)}">${vote_average}</span>
                </div>
                <div id="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
    `
    main.appendChild(movieEl);
    })
}
function rateHandle(vote){
    if (vote >= 8){
        return 'green'
    }
    else if (vote >= 5){
        return 'orange'
    }
    else {
        return 'red'
    }
}
const form  = document.getElementById('form');
const search = document.getElementById('search')
form.onsubmit = function(e){
    e.preventDefault();
    searchTerm = search.value;
    getMovies(SEARCH_API + searchTerm);
    search.value = ''
}