var body = document.querySelector("#header")
var list;
fetch("https://pinto-goldenrod-lettuce.glitch.me/movies").then(response =>
{
    response.json()

}).then(data => {
    body = for(function(id) {
        return (`<p>${id.movies.id}</p>`)
    })})
