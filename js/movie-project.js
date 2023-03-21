let moviesList;
let customTitle = document.querySelector("#title")
let customRating = document.querySelector("#rating")
let customGenre = document.querySelector("#genre")
let customDirector = document.querySelector("#director")
// console.log(body.innerHTML);
fetch("https://pinto-goldenrod-lettuce.glitch.me/movies").then(response => {
    return response.json()
}).then(function (data) {
    console.log(data);
    moviesList = data
    console.log(moviesList);

    function renderMovie(movie) {
        let html = `<section class="secOne">`
        html += `<div class="delete"><button>X</button></div>`
        html += `<div class="container-sm thisTwo">`
        html += `<a href="https://placeholder.com"><img src="https://via.placeholder.com/200"></a>`
        html += `<div class="description">`
        html += `<h4 class="title">${movie.title}</h4>`
        html += `<p>${movie.comment}</p></div>`

        html += `</div>`
        html+=`<div class="holder"><p class="rating">${movie.rating}</p></div></section>`
        return html;
    }

    function renderMovies(movies) {
        let html = '';
        for (let i = 0; i < movies.length; i++) {
            html += renderMovie(movies[i]);
        }
        return html;
    }

    document.querySelector("#body").innerHTML = renderMovies(moviesList)
})
