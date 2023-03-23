let temporary = 0
let imagineId = []
let deleteBtn = []
let editBtn = []
let addBtn;
const url2 = "https://relieved-twisty-trouser.glitch.me/movies"
let list;
//pageload behavior:

fetch(url2).then(response => {
    return response.json()
}).then(function (data) {
    list=data
    document.querySelector("#body").innerHTML = renderMovies(data)
    poster()
    renderFunctions()
    renderFunctions2()
})

//function declarations
function deleteEvent(event) {
    event.preventDefault()
    fetch(url2 + '/' + event.target.firstChild.id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        }
    })
    event.target.parentElement.parentElement.style.display = 'none'
}

function editEvent(event){
    let changeTitle = prompt(`Change Title?`)
    if (changeTitle !== null) {
        fetch(url2 + '/' + event.target.firstChild.id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({title: changeTitle})
        })
    }
    let changeDesc = prompt(`Change Description?`)
    if (changeDesc !== null) {
        fetch(url2 + '/' + event.target.firstChild.id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({comment: changeDesc})
        })
    }
    let changeRating = prompt(`Change Rating?`)
    if (changeRating !== null) {
        fetch(url2 + '/' + event.target.firstChild.id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({rating: changeRating})
        })
    }
    let changeGenre = prompt(`Change Genre?`)
    if (changeGenre !== null) {
        fetch(url2 + '/' + event.target.firstChild.id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({genre: changeGenre})
        })
    }
    fetch(url2).then(response => {
        return response.json()
    }).then(function (data) {
        listLength=data
        document.querySelector("#body").innerHTML = renderMovies(data)
        poster()
        renderFunctions()
        renderFunctions2()
    })
}

function renderFunctions(){
    addBtn = document.querySelector(`#add`)
    addBtn.addEventListener('click', newMovie)}
function renderFunctions2(){
    for (let i = 0; i < list.length; ++i) {
        deleteBtn[i] = document.querySelector(`#delete-${i}`)
        deleteBtn[i].addEventListener("click", deleteEvent)
        editBtn[i] = document.querySelector(`#edit-${i}`)
        editBtn[i].addEventListener('click', editEvent)
    }
}

function poster() {
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
}

function renderMovie(movie) {

    let html = `<section id='${movie.id}' class="secOne">`
    html += `<div class="delete"><button id="delete-${movie.id}" type="button"><span class="d-none" id="${movie.id}">hide me later: objectid: ${movie.id}</span>X</button></div>`
    html += `<div class="container-sm thisTwo">`
    html += `<a id="${temporary}" href="https://placeholder.com"><img src="https://via.placeholder.com/200"></a>`
    html += `<div class="description">`
    html += `<h3 class="title">${movie.title}</h3>`
    html += `<h6 class="sub-title">Directied by: ${movie.director}</h6>`
    html += `<p>${movie.comment}</p><hr><span>Genre: ${movie.genre}</span></div>`
    html += `</div>`
    html += `<div class="container"><hr><div class="holder"><p class="rating">${movie.rating}</p></div></div>`
    html += `<div class="edit"><button id="edit-${movie.id}"><span class="d-none" id="${movie.id}">hide me later: objectid: ${movie.id}</span>Edit</button></div></section>`
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

function newMovie(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value.toString()
    let comment = document.querySelector('#comment').value.toString()
    let director = document.querySelector('#director').value.toString()
    let rating = document.querySelector('#rating').value.toString()

    let tempMovie = {
        title: title,
        direcetor: director,
        rating: rating,
        comment: comment
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tempMovie)
    };
    fetch(url2, options)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    fetch(url2).then(response => {
        return response.json()
    }).then(function (data) {
        listLength=data
        document.querySelector("#body").innerHTML = renderMovies(data)
        poster()
        renderFunctions()
        renderFunctions2()

    })
}