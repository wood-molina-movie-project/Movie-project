let moviesList;
let customTitle = document.querySelector("#title").innerHTML
let customRating = document.querySelector("#rating").innerHTML
let customGenre = document.querySelector("#genre").innerHTML
let customDirector = document.querySelector("#director").innerHTML
// console.log(body.innerHTML);
fetch("https://pinto-goldenrod-lettuce.glitch.me/movies").then(response =>
{
    return response.json()
}).then(function(data){
    console.log(data);
    moviesList=data
    console.log(moviesList);

    function renderMovie(movie){
        let html= `<p>${movie.title}</p>`
        return html;
    }

    function renderMovies(movies){
        let html = '';
        for (let i = 0; i < movies.length; i++) {
            html += renderMovie(movies[i]);
        }
        return html;
    }
    document.querySelector("#body").innerHTML= renderMovies(moviesList)
})
