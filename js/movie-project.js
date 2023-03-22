let temporary = 0
let imagineId = [ ]
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
        html += `<a id="${temporary}" href="https://placeholder.com"><img src="https://via.placeholder.com/200"></a>`
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
            imagineId[i] = `img-${i}`
            temporary = imagineId[i]
            html += renderMovie(movies[i]);
        }
        return html;
    }

    document.querySelector("#body").innerHTML = renderMovies(moviesList)
    document.querySelector(`#img-0`).innerHTML = `<img src="img%20/dip.jpeg.png">`
    document.querySelector(`#img-1`).innerHTML = `<img src="img%20/tcf.jpeg.png">`
    document.querySelector(`#img-2`).innerHTML = `<img src="img%20/tqm.jpeg">`
    document.querySelector(`#img-3`).innerHTML = `<img src="img%20/ones.jpeg">`
    document.querySelector(`#img-4`).innerHTML = `<img src="img%20/12am.jpeg">`
    document.querySelector(`#img-5`).innerHTML = `<img src="img%20/sl.jpg">`
    document.querySelector(`#img-6`).innerHTML = `<img src="img%20/ducks.jpeg">`
    document.querySelector(`#img-7`).innerHTML = `<img src="img%20/pf.jpg">`
    document.querySelector(`#img-8`).innerHTML = `<img src="img%20/smile.jpeg">`
    document.querySelector(`#img-9`).innerHTML = `<img src="img%20/re.jpeg">`
    document.querySelector(`#img-10`).innerHTML = `<img src="img%20/sb.jpeg">`
    document.querySelector(`#img-11`).innerHTML = `<img src="img%20/spr.jpg">`
    document.querySelector(`#img-12`).innerHTML = `<img src="img%20/tho.jpg">`


    console.log(imagineId);
})
