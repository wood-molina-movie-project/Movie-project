let id;
let temporary = 0
let imagineId = []
let deleteBtn = []
const url = "https://pinto-goldenrod-lettuce.glitch.me/movies"
const url2 = "https://relieved-twisty-trouser.glitch.me/movies"

fetch(url2).then(response => {
    return response.json()
}).then(function (data) {
    document.querySelector("#body").innerHTML = renderMovies(data)
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
    let addBtn = document.querySelector(`#add`)
    addBtn.addEventListener('click', newMovie)
})

function renderMovie(movie) {

    let html = `<section class="secOne">`
    html += `<div class="delete"><button id="delete-${id}">X</button></div>`
    html += `<div class="container-sm thisTwo">`
    html += `<a id="${temporary}" href="https://placeholder.com"><img src="https://via.placeholder.com/200"></a>`
    html += `<div class="description">`
    html += `<h4 class="title">${movie.title}</h4>`
    html += `<p>${movie.comment}</p></div>`

    html += `</div>`
    html += `<div class="holder"><p class="rating">${movie.rating}</p></div></section>`
    deleteBtn += document.querySelector(`#delete-${id}`)
    return html;
}

function renderMovies(movies) {
    let html = '';
    for (let i = 0; i < movies.length; i++) {
        id = i
        imagineId[i] = `img-${i}`
        temporary = imagineId[i]
        html += renderMovie(movies[i]);
    }
    return html;
}

function renderNewMovie(movie) {
    let html = `<section class="secOne">`
    html += `<div class="delete"><button id="delete-${++id}">X</button></div>`
    html += `<div class="container-sm thisTwo">`
    html += `<a id="${temporary}" href="https://placeholder.com"><img src="https://via.placeholder.com/200"></a>`
    html += `<div class="description">`
    html += `<h4 class="title">${movie.title}</h4>`
    html += `<p>${movie.comment}</p></div>`
    html += `</div>`
    html += `<div class="holder"><p class="rating">${movie.rating}</p></div></section>`
    deleteBtn += document.querySelector(`#delete-${id}`)
    return html;
}

function newMovie(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value.toString()
    let comment = document.querySelector('#comment').value.toString()
    let director = document.querySelector('#director').value.toString()
    let rating = document.querySelector('#rating').value.toString()

    let tempMovie = {
        title:title,
        direcetor:director,
        rating:rating,
        comment:comment
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tempMovie)
    };
    fetch(url2,options)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    document.querySelector("#body").innerHTML += renderNewMovie(tempMovie)
    console.log(tempMovie);
}

function deleteMovie(event) {
    event.preventDefault()
    console.log('i got this far')
    if (event.target.id === 'delete-1') {
        console.log('it is doing somthing')
        fetch(url, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            }
        })

    }
}

// let addBtn = document.querySelector("#add")
// addBtn.addEventListener('click', newMovie)
deleteBtn.forEach(function (btn) {
    return btn.addEventListener('click', deleteMovie)
})

