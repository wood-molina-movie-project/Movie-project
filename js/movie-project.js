var body = document.querySelector("#header")
var list;
fetch("https://pinto-goldenrod-lettuce.glitch.me/movies").then(response => {
   list =  response.json
    console.log(response.json())}).then(data => {
    // body += data.map(id => `<p>${id.id}</p>`)})

    body = list.map(function(id) {
        return (`<p>${id.id}</p>`)
    })})
